const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];

console.log(arr)
//ADICIONAR ELEMENTOS
arr.push('Boromir')


//Adicionar elementos no começo
arr.unshift('Boromir')
console.log(arr)

//REMOVE O ULTIMO ELEMENTO DO ARRAY
const lestElement = arr.pop()
console.log(arr)
console.log(lestElement)


// REMOVER NO INICIO
const firstElement = arr.shift()
console.log(arr)
console.log(firstElement)

//PESQUISA POR UM ELEMETO DENTRO DO ARRAY
const inclui = arr.includes('Gandalf')
console.log(inclui)

//INDEXOF ou PEGAR O INDICE DE ONDE ESTA LOCALIZADO O ITEM
const indice = arr.indexOf('Gandalf')
console.log(indice)

//CORTAR OU CONCATENAR O ARRAY
const hobbits = arr.slice(0,4);
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits);
console.log(outros);