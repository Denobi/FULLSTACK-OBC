let valorInicial = parseFloat(prompt('Digite o valor inicial que possui: '))
let opcao ='';
do {
  opcao=prompt(`
  O Seu Saldo Atual é ${valorInicial}
  \n1. Adicionar Dinheiro
  \n2. Subitrair Dinheiro
  \n3. Encerrar
  `)
  switch (opcao) {
    case '1':
      valorInicial+= parseFloat(prompt('Qual o valor que deseja adicionar?'))
      break;
    case '2':
      valorInicial-= parseFloat(prompt('Qual o valor que deseja subtrair?'))
      break;
    case '3':
      alert('Qual o valor que deseja adicionar?')
      break;
  
    default:
      alert('Opção Invalida')
      break;
  }
} while (opcao !== '3')