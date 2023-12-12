const calcularFactorial = () => {
    const numeroIngresado = parseInt(prompt('Ingresa un número para calcular su factorial:'));
    const resultadoElemento = document.createElement('p');
  
    if (!isNaN(numeroIngresado)) {
      const resultado = factorial(numeroIngresado);
      resultadoElemento.textContent = `El factorial de ${numeroIngresado} es: ${resultado}`;
    } else {
      resultadoElemento.textContent = 'Por favor, introduce un número válido.';
    }
  
    document.body.appendChild(resultadoElemento);
  };
  
  const factorial = (numero) => {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let resultado = 1;
      for (let i = 2; i <= numero; i++) {
        resultado *= i;
      }
      return resultado;
    }
  };
  
  calcularFactorial();
  