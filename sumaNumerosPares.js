function sumaNumerosPares(num) {
  let suma = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
      suma += num[i];
    }
  }
  return suma;
}

console.log(sumaNumerosPares([2, 3, 4, 6, 8, 10]));
