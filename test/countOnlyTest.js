const assert = require("chai").assert;
const countOnly = require("../countOnly");

//

describe("#countOnly", () => {
  const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agohanna": false });
  it("it counts the occurances of a string within an array", () => {
    assert.equal(result["Fang"], 2)
  });
});


// const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agohanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);