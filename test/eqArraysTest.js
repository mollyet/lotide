const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// test code to test it within assertEqual
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // this is the same array
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // order should match
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false); //arrays with diff lenghts don't match