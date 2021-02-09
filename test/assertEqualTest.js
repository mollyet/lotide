const assert = require("chai").assert;
const assertEqual = require("../assertEqual");

describe("#assertEqual", () => {
  it("should take two arguments and display a message if they are equal", () => {
    assert.strictEqual(assertEqual("LHL", "LHL"), true);
  });
  it("should display a message if the test fails", () => {
    assert.strictEqual(assertEqual(42, "cheese"), false);
  });
});
