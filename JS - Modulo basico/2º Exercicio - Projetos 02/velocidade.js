const nomeUm = window.prompt('Digite o Nome do Primeiro Veiculo: ');
const velocidadeUm = parseFloat(window.prompt('Digite a velocidade do Primeiro Veiculo: '));
/*Informações do Segundo veiculo */
const nomeSegundo = window.prompt('Digite o Nome do Segundo Veiculo: ');
const velocidadeSegundo = parseFloat(window.prompt('Digite a velocidade do Segundo Veiculo: '));

if(velocidadeUm === velocidadeSegundo){
  alert(`Parabens As velocidade de ${nomeUm} e ${nomeSegundo} são Iguais `)
}
else if(velocidadeUm > velocidadeSegundo){
  alert(`Parabens As velocidade de ${nomeUm} é maior que a de ${nomeSegundo} `)
}
else if(velocidadeUm < velocidadeSegundo){
  alert(`Parabens As velocidade de ${nomeSegundo} é maior que a de ${nomeUm} `)
}