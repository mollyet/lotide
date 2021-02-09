//this function takes and array and callback and returns a new array



const takeUntil = function(arr, callback) {
  let result = [];
  let stopPoint = 0;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      stopPoint = i;
    }
  }
  for (let j = 0; j < stopPoint; j++) {
    result.push(arr[j]);
  }
  return result;
};

// 

module.exports = takeUntil;

