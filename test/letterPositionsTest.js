const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("should return the postions of a letter in a string", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("should not return the postion of a space", () => {
    let space = " ";
    assert.deepEqual(letterPositions("cool lotide function").space, undefined);
  });
});
