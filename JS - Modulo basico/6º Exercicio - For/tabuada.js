const valorInicial = parseFloat(prompt('Digite o valor que deseja multiplicar: '));
let valoresMultiplo = '';

for (let i = 0; i <= 20; i++) {
  valoresMultiplo += `${valorInicial} X ${i} = ${valorInicial*i}\n`
  
}
alert(`
Os resultados das multiplicações do numero ${valorInicial} são:\n
${valoresMultiplo}
`)