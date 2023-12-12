const generarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const llenarArray = (tamano, min, max) => {
  let array = [];
  for (let i = 0; i < tamano; i++) {
    let numero = generarNumeroAleatorio(min, max);
    array.push(numero);
  }
  return array;
};

const mostrarContenidoYSuma = (array) => {
  let suma = 0;
  console.log("Contenido del array:");
  for (let i = 0; i < array.length; i++) {
    console.log(`Posición ${i}: Valor ${array[i]}`);
    suma += array[i];
  }
  console.log(`La suma de todos los valores del array es: ${suma}`);
};

const tamanoArray = parseInt(prompt("Ingresa el tamaño del array:"));
if (!isNaN(tamanoArray) && tamanoArray > 0) {
  let miArray = llenarArray(tamanoArray, 0, 9);
  mostrarContenidoYSuma(miArray);
} else {
  console.log("Por favor, ingresa un tamaño de array válido.");
}
