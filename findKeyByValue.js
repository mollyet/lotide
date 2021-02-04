// assertation function
const assertEqual = function(actual, expected) {
  const pass = "🥰 🎉 Assertation Passed: ";
  const fail = "😭 😱 Assertation Failed: ";
  if (actual === expected) {
    console.log(`${pass} ${actual} === ${expected}`);
  } else {
    console.log(`${fail} ${actual} !== ${expected}`);
  }
};

///

const findKeyByValue = function(obj, value) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === value) {
      return key;
    }
  }
};

// test code

const bestTVShowsByGenre = {
  scienceFiction: "Star Trek: Discovery",
  comedy: "The Good Place",
  mystery: "Dark"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Dark"), "mystery");
assertEqual(findKeyByValue(bestTVShowsByGenre, "House Hunters"), undefined);
