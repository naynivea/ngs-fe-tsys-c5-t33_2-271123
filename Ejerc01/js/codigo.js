const calcularAreaCirculo = (radio) => {
  return Math.PI * Math.pow(radio, 2);
};

const calcularAreaTriangulo = (base, altura) => {
  return (base * altura) / 2;
};

const calcularAreaCuadrado = (lado) => {
  return lado * lado;
};

const calcularArea = () => {
  const figura = prompt(
    "¿Qué figura quieres calcular? (1) círculo, (2) triángulo o (3) cuadrado"
  )
  let resultado = "";

 parseInt(figura);

  switch (figura) {
    case "1":
      const radioCirculo = parseFloat(
        prompt("Introduce el radio del círculo:")
      );
      resultado = `El área del círculo es: ${calcularAreaCirculo(
        radioCirculo
      )}`;
      break;

    case "2":
      const baseTriangulo = parseFloat(
        prompt("Introduce la base del triángulo:")
      );
      const alturaTriangulo = parseFloat(
        prompt("Introduce la altura del triángulo:")
      );
      resultado = `El área del triángulo es: ${calcularAreaTriangulo(
        baseTriangulo,
        alturaTriangulo
      )}`;
      break;

    case "3":
      const ladoCuadrado = parseFloat(
        prompt("Introduce el lado del cuadrado:")
      );
      resultado = `El área del cuadrado es: ${calcularAreaCuadrado(
        ladoCuadrado
      )}`;
      break;

    default:
      resultado =
        "Figura no reconocida. Por favor, introduce 1 para círculo, 2 para triángulo o 3 para cuadrado.";
      break;
  }

  const resultadoElement = document.getElementById("resultado");
  if (resultadoElement) {
    resultadoElement.textContent = resultado;
  } else {
    const p = document.createElement("p");
    p.textContent = resultado;
    document.body.appendChild(p);
  }
};

const boton = document.createElement("button");
boton.textContent = "Calcular Área";
boton.onclick = calcularArea;
document.body.appendChild(boton);

const resultadoParrafo = document.createElement("p");
resultadoParrafo.id = "resultado";
document.body.appendChild(resultadoParrafo);
