function tamaño(candles) {
  var maxaltura = Math.max(...candles);

  var contador = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === maxaltura) {
      contador++;
    }
  }
  return contador;
}
