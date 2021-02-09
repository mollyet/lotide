const assert = require("chai").assert;
const eqObjects = require("../eqObjects");


//

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };

  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  it("should take in two objects and return true if they are equal", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it("should return false when one object has more keys than the other", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it("should return false when object values are different types", () => {
    assert.deepEqual(eqObjects(cd, ab), false);
  });
});