// find the middle value in an array


const middle = function(arr) {
  let arrMid = [];
  if (arr.length < 2) {
    return undefined;
  }
  if (arr.length % 2 === 0) {
    arrMid.push(arr[Math.floor((arr.length - 1) / 2)]);
    arrMid.push(arr[Math.floor(arr.length / 2)]);
  } else {
    arrMid.push(arr[Math.floor(arr.length / 2)]);
  }
  return arrMid;
};

//

module.exports = middle;

