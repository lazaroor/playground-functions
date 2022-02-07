// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let resultado = sentence.split(' ');
  return resultado;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let resultado = '';
  let ultimoElemento = arrayOfStrings.length - 1;
  resultado = arrayOfStrings[ultimoElemento] + ', ' + arrayOfStrings[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (wins * 3) + ties;
  return resultado;
}

// Desafio 6
function maiorValor(arrayOfNumbers) {
  let maiorNumero = arrayOfNumbers[0];
  // percorre a partir da segunda posição e atribui o maior valor do array.
  for (let index = 1; index < arrayOfNumbers.length; index +=1) {
    if (arrayOfNumbers[index] > maiorNumero) {
      maiorNumero = arrayOfNumbers[index];
    }
  }
  return maiorNumero;
}

function highestCount(arrayOfNumbers) {
  let contador = 0;
  let maiorNumero = maiorValor(arrayOfNumbers);
  // percorre acrescentando ao contador quantas vezes se repete.
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (maiorNumero === arrayOfNumbers[index]) {
      contador += 1;
    }
  }
  return contador;
}

function calculaDistanciaGatos(mouse, cat) {
  let distancia;
  if (mouse > cat) {
    distancia = mouse - cat;
  } else {
    distancia = cat - mouse;
  }
  return distancia;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cacador = 'os gatos trombam e o rato foge';
  let distanciaCat1 = calculaDistanciaGatos(mouse, cat1);
  let distanciaCat2 = calculaDistanciaGatos(mouse, cat2);

  if (distanciaCat1 < distanciaCat2) {
    cacador = 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    cacador = 'cat2';
  }

  return cacador;
}

// Desafio 8
function fizzBuzz(arrayOfNumber) {
  let arrayFinal = [];
  for (let key in arrayOfNumber) {
      if (arrayOfNumber[key] % 3 === 0 && arrayOfNumber[key] % 5 === 0) {
      arrayFinal.push('fizzBuzz');
    } else if (arrayOfNumber[key] % 3 === 0) {
      arrayFinal.push('fizz');
    } else if (arrayOfNumber[key] % 5 === 0) {
      arrayFinal.push('buzz');
    } else {
      arrayFinal.push('bug!');
    }
  }

  return arrayFinal;
}

// Desafio 9
function encode(texto) {
  let textoCodificado = '';
  for (let index = 0; index < texto.length; index += 1) {
    switch (texto[index]) {
      case 'a':
        textoCodificado += '1';
        break;
      case 'e':
        textoCodificado += '2';
        break;
      case 'i':
        textoCodificado += '3';
        break;
      case 'o':
        textoCodificado += '4';
        break;
      case 'u':
        textoCodificado += '5';
        break;
      default:
        textoCodificado += texto[index];
        break;
    }
  }
  return textoCodificado;
}

function decode(texto) {
  let textoDecodificado = '';
  for (let index = 0; index < texto.length; index += 1) {
    switch (texto[index]) {
      case '1':
        textoDecodificado += 'a';
        break;
      case '2':
        textoDecodificado += 'e';
        break;
      case '3':
        textoDecodificado += 'i';
        break;
      case '4':
        textoDecodificado += 'o';
        break;
      case '5':
        textoDecodificado += 'u';
        break;
      default:
        textoDecodificado += texto[index];
        break;
    }
  }
  return textoDecodificado;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
