const eqArrays = require("./eqArrays");

// 


const assertArraysEqual = function(arrayUno, arrayDeux) {
  const pass = "🥰 🎉 Assertation Passed: ";
  const fail = "😭 😱 Assertation Failed: ";
  if (eqArrays(arrayUno, arrayDeux)) {
    console.log(`${pass} ${arrayUno} === ${arrayDeux}`);
    return true;
  } else {
    console.log(`${fail} ${arrayUno} !== ${arrayDeux}`);
    return false;
  }

};


//

module.exports = assertArraysEqual;