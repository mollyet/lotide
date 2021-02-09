// this f(x) takes in a sentence and tells us where the letter is
// counts spaces/puncution, but spaces are deleted from obj before returing



const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i);
  }
  delete results[" "];
  return results;
};


// 


module.exports = letterPositions;

