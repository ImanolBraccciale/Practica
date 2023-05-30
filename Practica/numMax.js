function encontrarMaximo(num) {
  let maximo = num[0];

  for (let i = 1; i < num.length; i++) {
    if (num[i] > maximo) {
      maximo = num[i];
    }
  }
  return maximo;
}

console.log(encontrarMaximo([1, 2, 13, 15, 54, 34, 32, 23]));

/* la función encontrarMaximo utiliza un bucle for para recorrer el arreglo. Inicializa la variable maximo con el primer elemento del arreglo (arr[0]) y luego compara cada elemento restante del arreglo con maximo. Si un elemento es mayor que maximo, se actualiza el valor de maximo. Al final del bucle, se retorna el valor máximo encontrado.  */
