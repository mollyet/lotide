// assertation functions -- compares those arrays
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

// takes things out of arrays

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};


// test code -- checks if without took stuff away and that the source array is not modifed
const words = ["pizza", "chocolate", "nachos", "candy"];
const nums = [1, 2, 3, 4];
assertArraysEqual(without(nums, [2]), [1, 3, 4]); // all fo these should output true
assertArraysEqual(nums, [1, 2, 3, 4]);
assertArraysEqual(without(words, ["pizza"]), ["chocolate", "nachos", "candy"]);
assertArraysEqual(words, ["pizza", "chocolate", "nachos", "candy"]);

