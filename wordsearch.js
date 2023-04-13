
const wordSearch = (letters, word) => {
  if (letters.length) {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    const verticalJoin = [];
    let vertLet = 0;

    for (let i = 0; i < letters[0].length; i++) {
      let arr = [];
      for (let letter of letters) {
        arr.push(letter[vertLet]);
      }
      vertLet += 1;
      verticalJoin.push(arr.join(''));
    }

    for (let j of verticalJoin) {
      if (j.includes(word)) {
        return true;
      }
    }

    return false;
  }
};
module.exports = wordSearch