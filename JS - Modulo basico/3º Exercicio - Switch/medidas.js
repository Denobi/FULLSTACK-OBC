const medidas = prompt("Digite a medida em Metros que deseja converter!");
const opcoes = parseFloat(
  prompt(`
As opções de conversão são\n
1) milímetro (mm)
2) centímetro (cm)
3) decímetro (dm)
4) decâmetro (dam)
5) hectômetro (hm)
6) quilômetro (km)
`)
);
// const calc =
switch (opcoes) {
  case 1:
    alert(`A ${medidas}metros em mm fica ${medidas * 1000} mm `);
    break;
  case 2:
    alert(`A ${medidas}metros em Cm fica ${medidas * 100} cm `);
    break;
  case 3:
    alert(`A ${medidas}metros em dm fica ${medidas * 10} dm `);
    break;
  case 4:
    alert(`A ${medidas}metros em dam fica ${medidas / 10} dam `);
    break;
  case 5:
    alert(`A ${medidas}metros em hm fica ${medidas / 100} hm `);
    break;
  case 6:
    alert(`A ${medidas}metros em km fica ${medidas / 1000} km `);
    break;

  default:
    alert("Opção inválida");
}
