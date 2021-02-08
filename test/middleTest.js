const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual")

// test code
// all return true
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []); // does not display empty array! just  ===