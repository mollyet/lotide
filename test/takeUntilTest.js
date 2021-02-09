const assert = require("chai").assert;
const _ = require("../index");

//


describe("#takeUnitl", () => {
  const array = ["take", "this", "array", "so", "your", "function", "functions"];
  it("should take a callback function and an array, and return a new array ", () => {
    assert.deepEqual(_.takeUntil(array, x => x === "so"), ["take", "this", "array"]);
  });
  it("should not modify array", () => {
    assert.deepEqual(array, ["take", "this", "array", "so", "your", "function", "functions"]);
  });
});

