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

// this f(x) takes in a sentence and tells us where the letter is
// counts spaces/puncution, but spaces are deleted from obj before returing

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i);
  }
  delete results[" "];
  return results;
};

// test code

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("cool lotide function").d, [9]);