const assert = require("chai").assert;
const _ = require("../index");


//

describe("#assertArraysEqual", () => {
  it("should take in two arrays and display a message if they match", () => {
    assert.deepEqual(_.assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
  it("should display a message if the arrays do not match", () => {
    assert.deepEqual(_.assertArraysEqual([1, 2], [3, 5]), false);
  });
});

