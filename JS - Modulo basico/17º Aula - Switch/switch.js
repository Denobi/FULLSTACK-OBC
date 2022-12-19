const resultado = prompt('escolha uma Alertnativa: \n\na)\nb)\nc)\n')

switch (resultado) {
  case 'a':
    alert('O resultado é "A"')
    break;
  case 'b':
    alert('O resultado é "B"')
    break;
  case 'c':
    alert('O resultado é "C"')
    break;
  default:
    alert('finalizando')
    break;
}