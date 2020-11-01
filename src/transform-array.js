const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let transformArr = [];
  for (let i=0; i < arr.length; i++) {
    let item = arr[i];

    switch (item) {
      case  '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (transformArr.length !== 0 && (i < 2 || arr[i - 2] !== '--discard-next')) {
          transformArr.pop();
        }
        break;
      case '--double-next':
        if (i + 1 < arr.length) {
          transformArr.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i > 0 && (i < 2 || arr[i - 2] !== '--discard-next')) {
          transformArr.push(arr[i - 1]);
        }
        break;
      default:
        transformArr.push(item);
        break;
    }
  }
  return transformArr;
};
