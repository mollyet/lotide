// assertEqual from /assertEqual.js

const assertEqual = function(actual, expected) {
  const pass = "🥰 🎉 Assertation Passed: ";
  const fail = "😭 😱 Assertation Failed: ";
  if (actual === expected) {
    console.log(`${pass} ${actual} === ${expected}`);
  } else {
    console.log(`${fail} ${actual} !== ${expected}`);
  }
};

/// compare these arrays

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  } return true;
};



// test code to test it within assertEqual
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // this is the same array
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // order should match
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false); //arrays with diff lenghts don't match