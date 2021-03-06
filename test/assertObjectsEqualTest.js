const assert = require("chai").assert;
const _ = require("../index");

describe("#assertObjectsEqual", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: 1, b: 2, c: 3 };

  it("should take in two objects and display a message if they match", () => {
    assert.deepEqual(_.assertObjectsEqual(ab, ba), true);
  });
  it("should display a message if the objects do not match", () => {
    assert.deepEqual(_.assertObjectsEqual(ab, abc), false);
  });
});