const assert = require("chai").assert;
const _ = require("../index");

describe("#letterPositions", () => {
  it("should return the postions of a letter in a string", () => {
    assert.deepEqual(_.letterPositions("hello").e, [1]);
  });
  it("should not return the postion of a space", () => {
    let space = " ";
    assert.deepEqual(_.letterPositions("cool lotide function").space, undefined);
  });
});
