const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  const numsOne = [1, 2, 3, 4];
  const numsTwo = [1, 2, 3, 4];
  const numsThree = [1, 2, 3];
  const numsFour = [1, 2, "3"];
  it("should take in two arrays and return true if they match", () => {
    assert.deepEqual(eqArrays(numsOne, numsTwo), true);
  });
  it("should return false if the arrays are different lengths", () => {
    assert.strictEqual(eqArrays(numsOne, numsThree), false);
  });
  it("should return false if the array contents are different types", () => {
    assert.strictEqual(eqArrays(numsOne, numsFour), false);
  });
});
