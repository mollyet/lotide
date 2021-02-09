const assert = require("chai").assert;
const without = require("../without");

//

describe("#without", () => {
  const words = ["pizza", "chocolate", "nachos", "candy"];
  it("should take an array and value, and remove the specfied value", () => {
    assert.deepEqual(without(words, ["pizza"]), ["chocolate", "nachos", "candy"]);
  });
  it("should not modify the orginal array", () => {
    assert.deepEqual(words, ["pizza", "chocolate", "nachos", "candy"]);
  });
});


