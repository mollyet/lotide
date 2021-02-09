const assert = require("chai").assert;
const _ = require("../index");

describe("#eqArrays", () => {
  const numsOne = [1, 2, 3, 4];
  const numsTwo = [1, 2, 3, 4];
  const numsThree = [1, 2, 3];
  const numsFour = [1, 2, "3"];
  it("should take in two arrays and return true if they match", () => {
    assert.deepEqual(_.eqArrays(numsOne, numsTwo), true);
  });
  it("should return false if the arrays are different lengths", () => {
    assert.strictEqual(_.eqArrays(numsOne, numsThree), false);
  });
  it("should return false if the array contents are different types", () => {
    assert.strictEqual(_.eqArrays(numsOne, numsFour), false);
  });
});
