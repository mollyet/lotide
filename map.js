// this function is a homeade map f(x) and returns a transformed array

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};



//


module.exports = map;