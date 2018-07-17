// Set of functions to generate seemingly-real Dutch geographic data.
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function randomHouseNumber() {
  var randomNumber = (Math.round(Math.random() * 500) + 1) + ""
  // Add slight bias to adding a letter to the number
  var shouldAddRandomLetter = Math.floor(Math.random() * 10) > 5

  if(shouldAddRandomLetter) {
    var randomLetter = "ABCDE".charAt(Math.floor(Math.random() * 5))
    randomNumber += randomLetter
  }

  return randomNumber
}

export function randomZipCode() {
  var zipNumber = (Math.floor(8999 * Math.random()) + 1000)
  var randomLetter = () => "ABCDEZT".charAt(Math.floor(Math.random() * 7))
  var zipLetters = randomLetter() + randomLetter()
  return `${zipNumber} ${zipLetters}`
}

export function randomStreetName() {
  var prefixes = 'rivier, lelie, schat, oma, opa, leven, peter, sint-egbert, bas-en-bas, renalda, inktvis, zeevaart, sint-hendrik, regenboog, delft'.split(', ')
  var suffixes = 'straat, laan, wijk'.split(', ')
  var chosenPrefix = prefixes[Math.floor(Math.random() * prefixes.length)]
  var chosenSuffix = suffixes[Math.floor(Math.random() * suffixes.length)]
  return capitalizeFirstLetter(`${chosenPrefix}${chosenSuffix}`)
}

export function randomDutchAddress() {
  return `${ randomStreetName() } ${ randomHouseNumber() }\n${ randomZipCode() } Haarlem`
}
