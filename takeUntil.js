// asseration f(x)

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


//
const takeUntil = function(arr, callback) {
  let result = [];
  let stopPoint = 0;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      stopPoint = i;
    }
  }
  for (let j = 0; j < stopPoint; j++) {
    result.push(arr[j]);
  }
  return result;
};

// test code

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

const data3 = ["take", "this", "array", "so", "your", "function", "functions"];
const results3 = takeUntil(data3, x => x === "so");

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results3, ["take", "this", "array"]);