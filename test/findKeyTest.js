const assert = require("chai").assert;
const _ = require("../index");

//

describe("#findKey", () => {
  const result = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  };
  it("should take in a callback function && use the output to return a key", () => {
    ;
    assert.strictEqual(_.findKey(result, x => x.stars === 2), "noma");
  });
  it("should return undefined if a key is not found", () => {
    assert.strictEqual(_.findKey(result, x => x.stars === 7), undefined);
  });
});


