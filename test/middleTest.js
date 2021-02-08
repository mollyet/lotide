const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("should return one value for an array with an odd length", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return 2 values for an array with an even length", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return a undefined for an array with the length of one", () => {
    assert.deepEqual(middle[1], undefined);
  });
});

