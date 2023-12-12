const contarDigitos = () => {
  const numero = prompt(
    "Ingresa un número entero positivo para contar sus dígitos:"
  );
  const resultadoElemento = document.createElement("p");

  if (!isNaN(numero) && parseInt(numero) >= 0) {
    const numeroCifras = obtenerNumeroCifras(parseInt(numero));
    resultadoElemento.textContent = `El número de cifras de ${numero} es: ${numeroCifras}`;
  } else {
    resultadoElemento.textContent =
      "Por favor, introduce un número entero positivo válido.";
  }

  document.body.appendChild(resultadoElemento);
};

const obtenerNumeroCifras = (numero) => {
  return numero === 0 ? 1 : Math.floor(Math.log10(numero)) + 1;
};

contarDigitos();
