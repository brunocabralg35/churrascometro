// Carne - 400g por pessoa  / + de 6 horas - 650g.
// Cerveja = 1200ml por pessoa / + de 6 horas - 2000ml.
// Refrigerante/agua - 1000ml por pessoa / + de 6 horas - 1500ml.

// Criança vale metade.

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne =
        carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebida =
        bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2) * criancas;

    resultado.innerHTML = `<p>${
    qtdTotalCarne / 1000
  } Kg de Carne <img src="./assets/icone carne.png"></p>`;
    resultado.innerHTML += `<p>${Math.ceil(
    qtdTotalCerveja / 355
  )} latas de Cerveja <img src="./assets/icone cerveja.png">  </p>`;
    resultado.innerHTML += `<p>${Math.ceil(
    qtdTotalBebida / 2000
  )} L de Bebida <img src="./assets/icone refri.png"></p>`;
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    }
    return 400;
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    }
    return 1200;
}

function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    }
    return 1000;
}