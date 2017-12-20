const seedGen = require("../helpers/seedGen.js")

var seeds = []
const amount = 1000;

(async () => {
  console.log(`Generating ${amount} seeds...`);
  for(var i = 0; i < amount; i++) {
    seeds.push(await seedGen())
  }

  console.log(`Generated ${seeds.length} seeds...`);
  console.log(`First 10 seeds are:\n${seeds.slice(0, 10).join("\n")}`);
  console.log(`Doing frequency analysis...`);

  // A map (in JavaScript, an object) for the character=>count mappings
  var counts = {};

  // Misc vars
  var ch, index, len, count;
  var str = seeds.join("")
  var maxCount = 0
  // Loop through the string...
  for (index = 0, len = str.length; index < len; ++index) {
      // Get this character
      ch = str.charAt(index); // Not all engines support [] on strings

      // Get the count for it, if we have one; we'll get `undefined` if we
      // don't know this character yet
      count = counts[ch];

      // If we have one, store that count plus one; if not, store one
      // We can rely on `count` being falsey if we haven't seen it before,
      // because we never store falsey numbers in the `counts` object.
      counts[ch] = count ? count + 1 : 1;
      maxCount = Math.max(counts[ch], maxCount)
  }

  var minCount = 1
  for (var k in counts) {
    counts[k] = (counts[k] / maxCount).toFixed(2)
    minCount = Math.min(counts[k], minCount)
  }
  console.log(JSON.stringify(counts, null, 2))
  console.log('Lowest probability:', minCount);
})()
