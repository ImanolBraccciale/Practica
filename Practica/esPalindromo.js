function esPalindromo(cadena) {
  let sinespacio = cadena.replace(/\s/g, "");
  let invertidad = sinespacio.split("").reverse().join("");

  return sinespacio === invertidad;
}
