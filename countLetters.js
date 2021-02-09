// this f(x) counts all letters in a string
// spaces (results[" "]) are counted, but as per project instructions are removed from final count

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

//

module.exports = countLetters;
