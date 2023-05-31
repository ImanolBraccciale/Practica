function notas(grades) {
  var redondeo = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 40) {
      redondeo.push(grades[i]);
    } else {
      let multiplo5 = Math.ceil(grades[i] / 5) * 5;
      if (multiplo5 - grades[i] < 3) {
        redondeo.push(multiplo5);
      } else {
        redondeo.push(grades[i]);
      }
    }
  }
  return redondeo;
}

let grades = [84, 29, 57, 48, 73];
let redondeo = notas(grades);
console.log(redondeo);
