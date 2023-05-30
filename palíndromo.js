function esPalindromo(palabra) {
  let nuevap = palabra.split("").reverse().join("");

  if (nuevap === palabra) {
    return true;
  } else return false;
}
console.log(esPalindromo("radar"));
