const convertirDecimalABinario = () => {
  const numeroDecimal = parseInt(
    prompt("Ingresa un número decimal para convertir a binario:")
  );
  const resultadoElemento = document.createElement("p");

  if (!isNaN(numeroDecimal)) {
    const resultadoBinario = decimalABinario(numeroDecimal);
    resultadoElemento.textContent = `El número binario equivalente a ${numeroDecimal} es: ${resultadoBinario}`;
  } else {
    resultadoElemento.textContent = "Por favor, introduce un número válido.";
  }

  document.body.appendChild(resultadoElemento);
};

const decimalABinario = (numero) => {
  let resultadoBinario = "";

  while (numero > 0) {
    resultadoBinario = (numero % 2) + resultadoBinario;
    numero = Math.floor(numero / 2);
  }

  return resultadoBinario !== "" ? resultadoBinario : "0";
};

convertirDecimalABinario();
