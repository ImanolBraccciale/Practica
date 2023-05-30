function escalera(n) {
  for (let i = 1; i <= n; i++) {
    let linea = " ".repeat(n - i) + "#".repeat(i);
    console.log(linea);
  }
}
