const palavra = prompt('Digite a palavara que deseja verificar: ');
let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i]
  
}

if (palavra === palavraInvertida) {
  alert(`${palavra} é um palindromo!`)
  
}
else{
  alert(`${palavra} não é um palindromo!`)

}