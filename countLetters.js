// assertation function

const assertEqual = function(actual, expected) {
  const pass = "🥰 🎉 Assertation Passed: ";
  const fail = "😭 😱 Assertation Failed: ";
  if (actual === expected) {
    console.log(`${pass} ${actual} === ${expected}`);
  } else {
    console.log(`${fail} ${actual} !== ${expected}`);
  }
};


/// this f(x) counts all letters in a string
// spaces (results[" "]) are counted, but as per compass instructions are removed from final count

const countLetters = function(sentence) {
  let results = {};
  for (let letter of sentence) {
    if (results[letter] === undefined) {
      results[letter] = 0;
    }
    results[letter] += 1;
  }
  delete results[" "];
  return results;
};

// test code

const words = "lighthouse in the house";
const wordsResult = countLetters(words, {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});
console.log(countLetters(words));
assertEqual(wordsResult["h"], 4);
assertEqual(wordsResult["n"], 1);
assertEqual(wordsResult["z"], undefined);