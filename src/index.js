
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (!matrix || matrix.length === 0) return [];

  for (let i = 0; i < matrix.length; i++) {
    if (i%2 !== 0) matrix[i] = matrix[i].reverse();
  }

  let temp = matrix.reduce(function(acc, curr) {
    return acc.concat(curr);
  });

  return temp;
}
