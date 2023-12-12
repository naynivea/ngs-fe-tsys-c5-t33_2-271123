const convertirMoneda = (cantidadEuros, moneda) => {
  let mensaje = "";

  switch (moneda.toLowerCase()) {
    case "dolares":
    case "dólares":
      const dolares = cantidadEuros * 1.28611;
      mensaje = `${cantidadEuros} euros son ${dolares.toFixed(2)} dólares.`;
      break;

    case "libras":
      const libras = cantidadEuros * 0.86;
      mensaje = `${cantidadEuros} euros son ${libras.toFixed(2)} libras.`;
      break;

    case "yenes":
      const yenes = cantidadEuros * 129.852;
      mensaje = `${cantidadEuros} euros son ${yenes.toFixed(2)} yenes.`;
      break;

    default:
      mensaje =
        "Lo siento, no se reconoce la moneda. Las opciones son dólares, libras o yenes.";
      break;
  }

  alert(mensaje);
};

const cantidadEuros = parseFloat(
  prompt("Introduce la cantidad de euros a convertir:")
);
const monedaDestino = prompt(
  "Introduce la moneda a la que deseas convertir (dólares, libras o yenes):"
);

if (!isNaN(cantidadEuros)) {
  convertirMoneda(cantidadEuros, monedaDestino);
} else {
  alert("Por favor, introduce una cantidad válida.");
}
