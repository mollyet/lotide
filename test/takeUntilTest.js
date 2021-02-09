const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

//


describe("#takeUnitl", () => {
  const array = ["take", "this", "array", "so", "your", "function", "functions"];
  it("should take a callback function and an array, and return a new array ", () => {
    assert.deepEqual(takeUntil(array, x => x === "so"), ["take", "this", "array"]);
  });
});

