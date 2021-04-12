/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  const arr2 = [...arr];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      newArr.push(arr[i]);
    }
  }
  newArr.sort((a, b) => a - b);

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== -1) {
      arr2[i] = newArr.shift();
    }
  }

  return arr2;
}

module.exports = sortByHeight;
