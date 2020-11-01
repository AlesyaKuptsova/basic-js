const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if( date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]'){
    throw new Error();
  }
  let season = date.getMonth();

  if (season > 1 && season < 5) {
    return 'spring';
  }
  else if (season > 4 && season < 8) {
    return 'summer';
  }
  else if (season > 7 && season < 11) {
    return 'autumn';
  }
  else {
    return 'winter';
  }
};
