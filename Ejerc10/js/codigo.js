const esNumeroPrimo = (numero) => {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
};

const obtenerNumeroPrimoAleatorio = (min, max) => {
  let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

  while (!esNumeroPrimo(numeroAleatorio)) {
    numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return numeroAleatorio;
};

const obtenerMaximo = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
};

const tamanoArray = parseInt(prompt("Ingresa el tamaño del array:"));
if (!isNaN(tamanoArray) && tamanoArray > 0) {
  let array = [];
  let min = 2;
  let max = 100;
  for (let i = 0; i < tamanoArray; i++) {
    let numeroPrimo = obtenerNumeroPrimoAleatorio(min, max);
    array.push(numeroPrimo);
  }

  console.log("Array de números primos generados:", array);
  console.log("El número más grande del array es:", obtenerMaximo(array));
} else {
  console.log("Por favor, ingresa un tamaño de array válido.");
}
