const llenarArrayAleatorio = (tamano) => {
  let array = [];
  for (let i = 0; i < tamano; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
};

const reasignarArrayAleatorio = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100);
  }
};

const multiplicarArrays = (array1, array2) => {
  let resultado = [];
  let tamano = Math.min(array1.length, array2.length);

  for (let i = 0; i < tamano; i++) {
    resultado.push(array1[i] * array2[i]);
  }

  return resultado;
};

let tamanoArray = parseInt(prompt("Ingresa el tamaño de los arrays:"));

if (!isNaN(tamanoArray) && tamanoArray > 0) {
  let arrayUno = llenarArrayAleatorio(tamanoArray);
  let arrayDos = arrayUno.slice();

  reasignarArrayAleatorio(arrayDos);

  let arrayResultado = multiplicarArrays(arrayUno, arrayDos);

  console.log("Contenido del primer array:", arrayUno);
  console.log("Contenido del segundo array:", arrayDos);
  console.log(
    "Resultado de la multiplicación de ambos arrays:",
    arrayResultado
  );
} else {
  console.log("Por favor, ingresa un tamaño de array válido.");
}
