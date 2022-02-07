// Desafio 10
//Recebi ajuda do Roberval na monitoria individual que deixou o exercício mais claro
function techList(arrayTech, nome) {
  if (arrayTech.length === 0) return "Vazio!";

  arrayTech.sort();  
  let arrayResultado = [];

  for (let index = 0; index<arrayTech.length; index += 1) {
    // let objeto = {
    //   tech: arrayTech[index],
    //   name: nome
    // }
    arrayResultado.push({
      tech: arrayTech[index],
      name: nome
    });
  }
  return arrayResultado;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if(phoneNumber.length > 11 || phoneNumber.length < 11) return 'Array com tamanho incorreto.';
  for(let key in phoneNumber) {
    if (phoneNumber[key] < 0 || phoneNumber[key] > 9) return 'não é possível gerar um número de telefone com esses valores';
  }
  if (verificaNumeroRepetido(phoneNumber)) return 'não é possível gerar um número de telefone com esses valores';
  
  let numeroFinal = '(';
  for (let index = 0; index < phoneNumber.length ; index += 1) {
    numeroFinal += phoneNumber[index];
    if (index == 1) numeroFinal += ") ";
    else if (index == 6) numeroFinal += "-";
  }
  return numeroFinal;
  //Metodo de string - Javascript .substr para fazer a divisão
   

  //TENTAR COM SWITCH CASE DEFAULT
}

function verificaNumeroRepetido(phoneNumber){
  let count = 0;
  let number;
  for (let index = 0; index < phoneNumber.length ; index += 1) {
    number = phoneNumber[index];
    for (let i = 0; i < phoneNumber.length; i += 1) {
      if (phoneNumber[i] === number) {
        count += 1;
      }
    }
    if (count > 3 || count == 3) return true;
    count = 0;
  }
  return false;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const somaLadoAB = Math.abs(lineA+lineB);
  const somaLadoBC = Math.abs(lineB+lineC);
  const somaLadoAC = Math.abs(lineC+lineA);
  if (lineA > somaLadoBC) {
    return false;
  } else if (lineB > somaLadoAC) {
    return false;
  } else if (lineC > somaLadoAB) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
