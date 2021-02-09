const assert = require("chai").assert;
const _ = require("../index");

describe("#tail", () => {
  const words = ["hello", "world", "array"];
  it("should return everything but the head of the array", () => {
    assert.deepEqual(_.tail(words), ["world", "array"]);
  });
  it("should not modify the length of the exisiting array", () => {
    assert.strictEqual(words.length, 3);
  });
  it("the length of the tail should be one less than the original array", () => {
    let lengthCheck = _.tail(words);
    assert.strictEqual(lengthCheck.length, 2);

  });
});
