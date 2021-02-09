const assert = require("chai").assert;
const map = require("../map");


//


describe("#map", () => {
  const words = ["lizards", "inhabit", "great", "heights", "through", "high", "outcroppings", "under", "serious", "epiphytes"];
  it("should take an array and callback and return a transfromed array", () => {
    assert.deepEqual(map(words, x => x[0]), ["l", "i", "g", "h", "t", "h", "o", "u", "s", "e"]);
  });
  it("should not modify orginal array", () => {
    assert.deepEqual(words, ["lizards", "inhabit", "great", "heights", "through", "high", "outcroppings", "under", "serious", "epiphytes"]);
  });

});

//

/*
 * a note for anybody reading the sentence in words;
 * an Epiphyte is an oraganism that grows on the surface of a plant and gets its
 * nutrients and moisture from the air around it. Orchids and Mosses are epiphytes!
 * https://en.wikipedia.org/wiki/Epiphyte
 */