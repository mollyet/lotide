// one of the original assertation functions used before using mocha/chai

const assertEqual = function(actual, expected) {
  const pass = "🥰 🎉 Assertation Passed: ";
  const fail = "😭 😱 Assertation Failed: ";
  if (actual === expected) {
    console.log(`${pass} ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`${fail} ${actual} !== ${expected}`);
    return false;
  }
};

// export! 

module.exports = assertEqual;
