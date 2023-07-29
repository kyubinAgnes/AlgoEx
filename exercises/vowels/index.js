// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  //   const checker = "aeiou";
  const checker = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

module.exports = vowels;

// function vowels(str) {
//     let vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     for (const i of str.toLowerCase()) {
//       if (vowels.includes(i)) {
//         count += 1;
//       }
//     }
//     return count;
//   }
