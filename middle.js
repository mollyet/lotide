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

// find the middle value in an array
const middle = function(arr) {
  let arrMid = [];
  if (arr.length < 2) {
    return arrMid;
  }
  if (arr.length % 2 === 0) {
    arrMid.push(arr[Math.floor((arr.length - 1) / 2)]);
    arrMid.push(arr[Math.floor(arr.length / 2)]);
  } else {
    arrMid.push(arr[Math.floor(arr.length / 2)]);
  }
  return arrMid;
};


// test code
// all return true
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []); // does not display empty array! just  ===