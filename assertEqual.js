// f(x) implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🥰 🎉 Assertation Passed: ", actual, "===", expected);
  } else {
    console.log("😭 😱 Assertation Failed: ", actual, "!==", expected);
  }
};

// test code
assertEqual("LHL", "LHL"); //pass
assertEqual("Lotide", "hello darkness"); //fail
assertEqual(1, 1); //pass
assertEqual(1, 2); //fail