function contarVocales(word) {
  let contador = 0;
  const vocales = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < word.length; i++) {
    const caracter = word[i].toLowerCase();

    if (vocales.includes(caracter)) {
      contador++;
    }
  }
  return contador;
}

console.log(contarVocales("hola soy imanol y me gusta programar"));
