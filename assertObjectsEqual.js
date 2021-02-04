// assertation f(x)
const assertObjectsEqual = function (objUno, objDeux) {
  const pass = "🥰 🎉 Assertation Passed: ";
  const fail = "😭 😱 Assertation Failed: ";
  const inspect = require('util').inspect;
  if (eqObjects(objUno, objDeux)) {
    console.log(`${pass} ${inspect(objUno)} === ${inspect(objDeux)}`);
  } else {
    console.log(`${fail} ${inspect(objUno)} !== ${inspect(objDeux)}`);
  }
};

///

// eqArrays to compare arrays in an object

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


// compares two objects to see if they're equal

const eqObjects = function(objOne, objTwo) {
  if (Object.keys(objOne).length !== Object.keys(objTwo).length) {
    return false;
  }
  for (let key of Object.keys(objOne)) {
    if (Array.isArray(objOne[key]) && Array.isArray(objTwo[key])) {
      return eqArrays(objOne[key], objTwo[key]);
    } else {
      if (objOne[key] !== objTwo[key]) {
        return false;
      }
    }
  }
  return true;
};


// test code

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba)
