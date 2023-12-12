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

const numeroIngresado = parseInt(
  prompt("Ingresa un número para verificar si es primo:")
);
const resultadoElemento = document.createElement("p");

if (!isNaN(numeroIngresado)) {
  const resultado = esNumeroPrimo(numeroIngresado);
  if (resultado) {
    resultadoElemento.textContent = `${numeroIngresado} es un número primo.`;
  } else {
    resultadoElemento.textContent = `${numeroIngresado} no es un número primo.`;
  }
} else {
  resultadoElemento.textContent = "Por favor, introduce un número válido.";
}

document.body.appendChild(resultadoElemento);
