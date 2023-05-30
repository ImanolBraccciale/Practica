function diferenciadiagonal(arr) {
  let n = arr.length;
  let diagonalizquierda = 0;
  let diagonalderecha = 0;

  for (let i = 0; i < n; i++) {
    diagonalizquierda = arr[i][i];
    diagonalderecha = arr[i][n - i - 1];
  }
  return Math.abs(diagonalderecha - diagonalizquierda);
}
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

let difference = diferenciadiagonal(matrix);
console.log(difference);
