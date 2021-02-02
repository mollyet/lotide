// f(x) implementation

const assertEqual = function(actual, expected) {
  const pass = "🥰 🎉 Assertation Passed: ";
  const fail = "😭 😱 Assertation Failed: ";
  if (actual === expected) {
    console.log(`${pass} ${actual} === ${expected}`);
  } else {
    console.log(`${fail} ${actual} !== ${expected}`);
  }
};

// test code
assertEqual("LHL", "LHL"); //pass
assertEqual("Lotide", "hello darkness"); //fail
assertEqual(1, 1); //pass
assertEqual(1, 2); //fail
assertEqual(42, "cheese"); //fail
