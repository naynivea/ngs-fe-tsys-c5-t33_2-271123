let arrayNumeros = [];

const llenarValores = () => {
  for (let i = 0; i < 10; i++) {
    let valor = parseInt(prompt(`Introduce el valor para la posición ${i}:`));
    arrayNumeros[i] = valor;
  }
};

const mostrarValores = () => {
  for (let i = 0; i < arrayNumeros.length; i++) {
    console.log(`Índice ${i}: Valor ${arrayNumeros[i]}`);
  }
};

llenarValores();
mostrarValores();
