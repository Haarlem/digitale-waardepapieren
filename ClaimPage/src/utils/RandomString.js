// randomString(length)
// --------------------
//
// Generates and returns a cryptographically secure
// uniform alphanumeric random string.
//
// Examples:
//
//  randomString(14) // "oXYWpc1vODNR3M"
//  randomString.hex(8) // "663c722b65943b9b"
//  randomString.entropy(128) // "Ss9waKhjUqOpcoOYgz8zx5"
//  randomString.hex.entropy(64) // "132ae4800cae9418"
//
// If length is 0 or omitted, returns a string containing
// 128 bits of entropy, which is good enough for most
// purposes (i.e. globally unique and unpredictable).
//
//     randomString() // "shTJbSVWxm4sgqVZiZornN"
//     randomString.hex() // "2658a04afc409f15ce3527545a88b722"
//     randomString.base64() // "ttlfbFR5dFn+Fp3TrYWd+D"
//
//  randomString.entropy(bits)
//    returns a random string containing at least
//    the given number of bits of entropy
//
//  randomString.charset
//    (read-only) gets charset used to generate strings
//
// Functions for different charsets
// (each have the corresponding .entropy and .charset properties):
//
//  randomString.alphanumeric(length)
//    alias for randomString, range: [A-Z, a-z, 0-9]
//
//  randomString.alpha(length)
//    returns a random alphabetic string in [A-Z, a-z]
//
//  randomString.alphalower(length)
//    returns a random lowercase alphabetic string in [a-z]
//
//  randomString.hex(length)
//    returns a random hex string in [0-9, a-f]
//
//  randomString.numeric(length)
//    returns a random numeric string in [0-9]
//
//  randomString.base64(length)
//    returns an unpadded random Base64 string in [A-Z, a-z, 0-9, +, /]
//
//  randomString.url(length)
//    returns an unpadded random URL-safe Base64 string in [A-Z, a-z, 0-9, -, _]
//
//  randomString.custom(charset)
//    returns a function which generates random strings
//    with characters from the given charset string:
//
//    var randomAbc = randomString.custom('abc')
//    randomAbc(10) // "bccccccaac"
//    randomAbc.entropy(32) // "aabccbabccaaabcacaacb"
//    randomAbc.charset // "abc"
//
// Testing:
//
//  randomString.test(quick)
//    runs a self-test and throws if there are errors.
//    If quick is true, skips some long tests.
//
// ---
// Made by Dmitry Chestnykh (@dchest) in 2016.
// Public domain.
// ---
var randomString = (function() {

  var getRandomBytes = (
    (typeof self !== 'undefined' && (self.crypto || self.msCrypto))
      ? function() { // Browsers
          var crypto = (self.crypto || self.msCrypto), QUOTA = 65536;
          return function(n) {
            var a = new Uint8Array(n);
            for (var i = 0; i < n; i += QUOTA) {
              crypto.getRandomValues(a.subarray(i, i + Math.min(n - i, QUOTA)));
            }
            return a;
          };
        }
      : function() { // Node
          return require("crypto").randomBytes;
        }
  )();

  var makeGenerator = function(charset) {
    if (charset.length < 2) {
      throw new Error('charset must have at least 2 characters');
    }

    var generate = function(length) {
      if (!length) return generate.entropy(128);
      var out = '';
      var charsLen = charset.length;
      var maxByte = 256 - (256 % charsLen);
      while (length > 0) {
        var buf = getRandomBytes(Math.ceil(length * 256 / maxByte));
        for (var i = 0; i < buf.length && length > 0; i++) {
          var randomByte = buf[i];
          if (randomByte < maxByte) {
            out += charset.charAt(randomByte % charsLen);
            length--;
          }
        }
      }
      return out;
    };

    generate.entropy = function(bits) {
      return generate(Math.ceil(bits / (Math.log(charset.length) / Math.LN2)));
    };

    generate.charset = charset;

    return generate;
  };


  // Charsets

  var numbers = '0123456789', letters = 'abcdefghijklmnopqrstuvwxyz';

  var CHARSETS = {
    numeric: numbers,
    hex: numbers + 'abcdef',
    alphalower: letters,
    alpha: letters + letters.toUpperCase(),
    alphanumeric: numbers + letters + letters.toUpperCase(),
    base64: numbers + letters + letters.toUpperCase() + '+/',
    url: numbers + letters + letters.toUpperCase() + '-_'
  };

  // Functions

  var randomString = makeGenerator(CHARSETS.alphanumeric);

  for (var name in CHARSETS) {
    randomString[name] = makeGenerator(CHARSETS[name]);
  }

  randomString.custom = makeGenerator;

  // Tests

  var TESTS = {
    length: function(fn) {
      if (fn().length !== fn.entropy(128).length) {
        throw new Error('Bad result for zero length');
      }
      for (var i = 1; i < 32; i++) {
        if (fn(i).length !== i) {
          throw new Error('Length differs: ' + i);
        }
      }
    },
    chars: function(fn) {
      var chars = Array.prototype.map.call(fn.charset, function(x) {
        return '\\u' + ('0000' + x.charCodeAt(0).toString(16)).substr(-4);
      });
      var re = new RegExp('^[' + chars.join('') + ']+$');
      if (!re.test(fn(256))) {
        throw new Error('Bad chars for ' + fn.charset);
      }
    },
    entropy: function(fn) {
      var len = fn.entropy(128).length;
      if (len * (Math.log(fn.charset.length) / Math.LN2) < 128) {
        throw new Error('Wrong length for entropy: ' + len);
      }
    },
    uniqueness: function(fn, quick) {
      var uniq = {};
      for (var i = 0; i < (quick ? 10 : 10000); i++) {
        var s = fn();
        if (uniq[s]) {
          throw new Error('Repeated result: ' + s);
        }
        uniq[s] = true;
      }
    },
    bias: function(fn, quick) {
      if (quick) return;
      var s = '', counts = {};
      for (var i = 0; i < 1000; i++) {
        s += fn(1000);
      }
      for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        counts[c] = (counts[c] || 0) + 1;
      }
      var avg = s.length / fn.charset.length;
      for (var k in counts) {
        var diff = counts[k] / avg;
        if (diff < 0.95 || diff > 1.05) {
          throw new Error('Biased "' + k + '": average is ' + avg +
                          ", got " + counts[k] + ' in ' + fn.charset);
        }
      }
    }
  };

  randomString.test = function(quick) {
    for(var test in TESTS) {
      var t = TESTS[test];
      t(randomString, quick);
      t(randomString.custom('abc'), quick);
      for (var cname in CHARSETS) {
        t(randomString[cname], quick);
      }
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = randomString;
  }

  return randomString;

}());
