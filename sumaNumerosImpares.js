function sumaNumerosImpares(num) {
  let suma = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
      suma += num[i];
    }
  }
  return suma;
}

console.log(sumaNumerosImpares([1, 3, 5, 7]));
