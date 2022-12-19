const personagemUm = prompt('Digite o nome do primeiro Personagem: ');
const personagemUmAtaque = parseFloat(prompt('Digite o Poder de ataque do primeiro Personagem: '));

// SEGUNDO PERSONAGEM
const personagemDois = prompt('Digite o nome do Segundo Personagem: ');
let personagemDoisVida = parseFloat(prompt('Digite a quantidade de vida do Segundo Persoganem: '));
const personagemDoisDefesa = parseFloat(prompt('Digite o Poder de Defesa do segundo Personagem: '));
const personagemDoisEscudo = prompt('O Segundo Personagem possui escudo?(Sim/Não)')

let danoCausado = 0;

if(personagemUmAtaque > personagemDoisDefesa && personagemDoisEscudo === 'Não'){
  danoCausado = personagemUmAtaque - personagemDoisDefesa;
}
else if(personagemUmAtaque > personagemDoisDefesa && personagemDoisEscudo === "Sim"){
  danoCausado = (personagemUmAtaque-personagemDoisDefesa)/2;
  
  
}
personagemDoisVida -= danoCausado;

alert(`${personagemUm} Causou ${danoCausado} pontos ao ${personagemDois} `);
alert(`
  ${personagemUm} \nPoder de Ataque: ${personagemUmAtaque} \n\n ${personagemDois} \n Pontos de vida: ${personagemDoisVida} \nPoder de defesa: ${personagemDoisDefesa} \nPossui escudo:  ${personagemDoisEscudo}
`)