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
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     const a = stringA.replace(/[^\w]/g, "").toLowerCase();
//     const b = stringB.replace(/[^\w]/g, "").toLowerCase();
//     const objectA = {};
//     const objectB = {};

//     if (a.length !== b.length) {
//       return false;
//     }

//     for (const char of a) {
//       if (!objectA[char]) {
//         objectA[char] = 1;
//       } else {
//         objectA[char] += 1;
//       }
//     }

//     for (const char of b) {
//       if (!objectB[char]) {
//         objectB[char] = 1;
//       } else {
//         objectB[char] += 1;
//       }
//     }

//     for (const char in objectA) {
//       if (objectA[char] !== objectB[char]) {
//         return false;
//       }
//     }

//     return true;
//   }

// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//       return false;
//     }

//     for (let char in aCharMap) {
//       if (aCharMap[char] !== bCharMap[char]) {
//         return false;
//       }
//     }

//     return true;
//   }

//   function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g).toLowerCase()) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
//   }
