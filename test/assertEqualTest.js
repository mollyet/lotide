const assert = require("chai").assert;
const _ = require("../index");

describe("#assertEqual", () => {
  it("should take two arguments and display a message if they are equal", () => {
    assert.strictEqual(_.assertEqual("LHL", "LHL"), true);
  });
  it("should display a message if the test fails", () => {
    assert.strictEqual(_.assertEqual(42, "cheese"), false);
  });
});
