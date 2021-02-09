const assert = require("chai").assert;
const _ = require("../index");

//

describe("#countOnly", () => {
  const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
  const result = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agohanna": false });
  it("it counts the occurances of a string within an array", () => {
    assert.equal(result["Fang"], 2);
  });
  it("should not modify orignal array", () => {
    assert.deepEqual(firstNames, ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"]);
  });
});
