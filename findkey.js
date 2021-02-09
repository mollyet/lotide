//takse in callback f(x) to find a key within a given object



const findKey = function(obj, callback) {
  for (let key of Object.keys(obj)) {
    if (callback(obj[key]) === true) {
      return key;
    }
  }

};


//


module.exports = findKey;