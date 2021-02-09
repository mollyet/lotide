const assert = require("chai").assert;
const _ = require("../index");

//

describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(_.head([5, 6, 7]), 5);
  });
  it("returns 1 for [1]", () => {
    assert.strictEqual(_.head([1]), 1);
  });
  it("returns Hello for ['Hello, 'Lightouse', 'Labs']", () => {
    assert.strictEqual(_.head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("should return undefined for an empty array", () => {
    assert.strictEqual(_.head([]), undefined);
  });
});

