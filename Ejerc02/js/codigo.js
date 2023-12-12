const generarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const cantidadNumeros = parseInt(
  prompt("¿Cuántos números aleatorios deseas generar?")
);

if (!isNaN(cantidadNumeros)) {
  const minimo = parseInt(prompt("Introduce el valor mínimo del rango:"));
  const maximo = parseInt(prompt("Introduce el valor máximo del rango:"));

  if (!isNaN(minimo) && !isNaN(maximo)) {
    console.log(
      `Generando ${cantidadNumeros} números aleatorios entre ${minimo} y ${maximo}:`
    );
    for (let i = 0; i < cantidadNumeros; i++) {
      const numeroAleatorio = generarNumeroAleatorio(minimo, maximo);
      console.log(numeroAleatorio);
    }
  } else {
    console.log("Por favor, introduce números válidos para el rango.");
  }
} else {
  console.log(
    "Por favor, introduce un número válido para la cantidad de números a generar."
  );
}
