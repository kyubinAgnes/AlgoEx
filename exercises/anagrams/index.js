// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const a = stringA.replace(/[^\w]/g, "").toLowerCase();
  const b = stringB.replace(/[^\w]/g, "").toLowerCase();
  const objectA = {};
  const objectB = {};

  if (a.length !== b.length) {
    return false;
  }

  for (const char of a) {
    if (!objectA[char]) {
      objectA[char] = 1;
    } else {
      objectA[char] += 1;
    }
  }

  for (const char of b) {
    if (!objectB[char]) {
      objectB[char] = 1;
    } else {
      objectB[char] += 1;
    }
  }

  for (const char in objectA) {
    if (objectA[char] !== objectB[char]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
