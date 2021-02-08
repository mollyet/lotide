const assertEqual = require("../assertEqual");
const tail = require("../tail");


// test code
const words = ["hello", "world", "array"];
let tailOne = tail(words);
console.log("here is an array", words);
console.log("here is the tail", tailOne);
console.log("the length of the orginal array is not modifed");
assertEqual(words.length, 3);
console.log("the length of the tail is one less than the lengh of the orginal array");
assertEqual(tailOne.length, 2);