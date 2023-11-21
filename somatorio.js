function somatorioDivisiveisPor3ou5(numero) {
  let somatorio = 0;

  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      somatorio += i;
    }
  }

  return somatorio;
}

// Exemplos de uso:
console.log(somatorioDivisiveisPor3ou5(10)); // Deve retornar 23
console.log(somatorioDivisiveisPor3ou5(11)); // Deve retornar 33
