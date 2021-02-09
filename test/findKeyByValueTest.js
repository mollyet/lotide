const assert = require("chai").assert;
const _ = require("../index");

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    scienceFiction: "Star Trek: Discovery",
    comedy: "The Good Place",
    mystery: "Dark"
  };
  it("when given a value, it should return the correspondng key", () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "Dark"), "mystery");
  });
  it("should retrun undefined when given a value that does not have a corresponding key", () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "House Hunters"), undefined);
  });
});

