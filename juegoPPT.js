/* function juegoPPT(jugadoropt) {
  var opciones = ["piedra", "papel", "tijera"];

  var maquina = opciones[Math.floor(Math.random() * opciones.length)];

  if (jugadoropt === maquina) {
    return "empate" + jugadoropt;
  }

  if (jugadoropt === "tijeras") {
    if (maquina === "papel") {
      return "Ganaste.La maquina sacó papel";
    } else return "Perdiste.La maquina sacó piedra";
  }

  if (jugadoropt === "papel") {
    if (maquina === "piedra") {
      return "Ganaste.La maquina sacó piedra";
    } else return "Perdiste.La maquina sacó tijera";
  }

  if (jugadoropt === "piedra") {
    if (maquina === "tijera") {
      return "Ganaste.La maquina sacó tijera";
    } else return "Perdiste.La maquina sacó papel";
  }

  var jugadoropt = prompt("Seleccione entre piedra, papel y tijera");
  var resultado = juegoPPT(jugadoropt);

  console.log(resultado);
}  */
function juegoPPT(jugadoropt) {
  var opciones = ["piedra", "papel", "tijera"];

  var maquina = opciones[Math.floor(Math.random() * opciones.length)];

  if (!opciones.includes(jugadoropt)) {
    return "Opción inválida. Por favor, seleccione entre piedra, papel o tijera";
  }

  if (jugadoropt === maquina) {
    return "Es un empate. Ambos eligieron " + jugadoropt;
  }

  if (jugadoropt === "tijera") {
    if (maquina === "papel") {
      return "Ganaste. La máquina eligió papel";
    } else {
      return "Perdiste. La máquina eligió piedra";
    }
  }

  if (jugadoropt === "papel") {
    if (maquina === "piedra") {
      return "Ganaste. La máquina eligió piedra";
    } else {
      return "Perdiste. La máquina eligió tijera";
    }
  }
}
