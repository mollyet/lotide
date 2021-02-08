const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  const words = ["hello", "world", "array"];
  it("should return everything but the head of the array", () => {
    assert.deepEqual(tail(words), ["world", "array"]);
  });
  it("should not modify the length of the exisiting array", () => {
    assert.strictEqual(words.length, 3);
  });
  it("the length of the tail should be one less than the original array", () => {
    let lengthCheck = tail(words);
    assert.strictEqual(lengthCheck.length, 2);

  });
});
