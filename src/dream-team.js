const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }
  let name = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      let letters = members[i].match(/[A-Z]/i);
      if(letters.length !== 0) {
        let nameUpper = letters[0];
        name.push(nameUpper.toUpperCase(''));
      }
    }
  }
  return name.sort().join('');
};