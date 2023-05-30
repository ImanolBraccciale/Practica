function sumardigitos(num) {
  let suma = 0;
  let separado = String(num).split("");

  for (let i = 0; i < separado.length; i++) {
    suma += Number(separado[i]);
  }

  return suma;
}

console.log(sumardigitos(123));
