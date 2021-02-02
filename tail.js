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

// f(x) to find the tail of an array

const tail = function(arr) {
  return arr.slice(1);
};


// test code
const words = ["hello", "world", "array"];
let tailOne = tail(words);
console.log("here is an array", words);
console.log("here is the tail", tailOne);
console.log("the length of the orginal array is not modifed");
assertEqual(words.length, 3);
console.log("the length of the tail is one less than the lengh of the orginal array");
assertEqual(tailOne.length, 2);