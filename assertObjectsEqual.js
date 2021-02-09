const _ = require("../index");
// comapares two objects and displays a message if they are equal




const assertObjectsEqual = function (objUno, objDeux) {
  const pass = "🥰 🎉 Assertation Passed: ";
  const fail = "😭 😱 Assertation Failed: ";
  const inspect = require('util').inspect;
  if (_.eqObjects(objUno, objDeux)) {
    console.log(`${pass} ${inspect(objUno)} === ${inspect(objDeux)}`);
    return true;
  } else {
    console.log(`${fail} ${inspect(objUno)} !== ${inspect(objDeux)}`);
    return false;
  }
};


//



module.exports = assertObjectsEqual;

