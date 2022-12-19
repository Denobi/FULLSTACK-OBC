const primeiroNome= window.prompt('Digite seu Primeiro Nome: ');
const segundoNome= window.prompt('Digite seu Sobrenome: ');
const estudos= window.prompt('Digite sua area de estudo: ');
const nascimento = window.prompt('Digite o ano de nascimento: ');;

alert(
  `
  Parabens Usuario cadastrato! \n 
  \n Nome do Candidato: ${primeiroNome + " " + segundoNome} 
  \n Campo de Estudo: ${estudos} 
  \n Idade do Candidato: ${2022 - nascimento}
  `
);


