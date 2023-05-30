function miniMaxSum(arr) {
  let ordenada = arr.sort((a, b) => a - b);

  let min = ordenada.slice(0, 4).reduce((a, b) => a + b, 0);
  let max = ordenada.slice(1).reduce((a, b) => a + b, 0);

  console.log(min + " " + max);
}
