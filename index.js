function iterativeLog(array) {
  var index = 0
  array.forEach(item => {
    console.log(`${index}: ${item}`)
    index += 1
  })
};

function iterate(callback) {
  var array = [1,2,3];
  callback(array);
  return array;
};

function doToArray(array, callback) {
  array.forEach(callback);
};
