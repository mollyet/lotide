// assertation f(x)s

const assertArraysEqual = function(arrayUno, arrayDeux) {
  const pass = "🥰 🎉 Assertation Passed: ";
  const fail = "😭 😱 Assertation Failed: ";
  if (eqArrays(arrayUno, arrayDeux)) {
    console.log(`${pass} ${arrayUno} === ${arrayDeux}`);
  } else {
    console.log(`${fail} ${arrayUno} !== ${arrayDeux}`);
  }

};

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  } return true;
};



// this function is a homeade map f(x) and returns a transformed array

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// test code
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const words2 = ["a", "cat", "ran", "outside", "so", "then", "i", "cried"];
const acrostic = map(words2, x => x[0]);
assertArraysEqual(acrostic, ["a", "c", "r", "o", "s", "t", "i", "c"]);

const words3 = ["lizards", "inhabit", "great", "heights", "through", "high", "outcroppings", "under", "serious", "epiphytes"];
const lighthouse = map(words3, x => x[0]);
assertArraysEqual(lighthouse, ["l", "i", "g", "h", "t", "h", "o", "u", "s", "e"]);
/*
 * a note for anybody reading the sentence in words3;
 * an Epiphyte is an oraganism that grows on the surface of a plant and gets its
 * nutrients and moisture from the air around it. Orchids and Mosses are epiphytes!
 * https://en.wikipedia.org/wiki/Epiphyte
 */