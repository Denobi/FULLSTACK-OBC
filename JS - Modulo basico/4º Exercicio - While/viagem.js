const nomeDoViajante = prompt('Digite seu nome: ');
let viajou = prompt('Você já viajou para alguma cidade? (Sim/Não)')
let listaDeCidades = '';
let i = 0
while (viajou === 'Sim'|| viajou ==="sim") {
  i++
  listaDeCidades += '\n- ' + prompt('Qual a cidade que você já conheceu: ')
  viajou = prompt('Você já viajou para alguma cidade? (Sim/Não)')

}

alert(`Olá ${nomeDoViajante} você viajou para um total de ${i} cidades sendo elas: \n ${listaDeCidades}`)