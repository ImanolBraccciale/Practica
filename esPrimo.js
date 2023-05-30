function esPrimo(num) {
  for (let i = 0; i < num; i++) {
    if (num % 1 == 0) {
      return true;
    } else return false;
  }
}
console.log(esPrimo(3));
