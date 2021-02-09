const assert = require("chai").assert;
const _ = require("../index");


//

describe("#countLetters", () => {
  const words = "lighthouse in the house";
  const result = {
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
  };
  it("should return a count of letters in a string as an object", () => {
    assert.deepEqual(_.countLetters(words), result);
  });
  it("should not count spaces", () => {
    assert.strictEqual(result[" "], undefined);
  });
  it("should return undefined for leters that are not the original string", () => {
    assert.strictEqual(result["z"], undefined);
  });
});
