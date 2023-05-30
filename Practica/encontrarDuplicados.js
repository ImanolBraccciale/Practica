function encontrarDuplicados(num) {
  let contador = {};

  let duplicados = [];

  for (let i = 0; i < num.length; i++) {
    const numero = num[i];

    contador[numero] = (contador[numero] || 0) + 1;

    if (contador[numero] === 3) {
      duplicados.push(numero);
    }
  }
  return duplicados;
}

console.log(encontrarDuplicados([1, 1, 1, 1, 11, 3, 4, 3, 5, 6, 6, 6]));
