let tamanoArray = parseInt(prompt("Ingresa el tamaño del array:"));

if (!isNaN(tamanoArray) && tamanoArray > 0) {
  let array = [];

  for (let i = 0; i < tamanoArray; i++) {
    array.push(Math.floor(Math.random() * 300) + 1);
  }

  let digito = parseInt(
    prompt(
      "Ingresa el dígito para filtrar los números terminados en ese dígito:"
    )
  );

  if (!isNaN(digito) && digito >= 0 && digito <= 9) {
    let numerosTerminadosEnDigito = [];

    for (let i = 0; i < array.length; i++) {
      const ultimoDigito = array[i] % 10;
      if (ultimoDigito === digito) {
        numerosTerminadosEnDigito.push(array[i]);
      }
    }

    console.log(`Números terminados en ${digito}:`, numerosTerminadosEnDigito);
  } else {
    console.log("Por favor, introduce un dígito válido (entre 0 y 9).");
  }
} else {
  console.log("Por favor, ingresa un tamaño de array válido.");
}
