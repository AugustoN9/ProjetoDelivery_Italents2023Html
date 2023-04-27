let lista = ['Hidrogenio', 'Oxigenio', 'Carbono', 'Nitrogenio', 'Fosforo'], listElement = document.querySelector('ul');


function listarNomes() {
    let nomes = '';

    for (let nome of lista) {
        nomes += `<li>Nomes: ${nome}</li>`;
    }
    listElement.innerHTML = nomes;
}

listarNomes();

let titulo = document.querySelector('h1');

titulo.innerText = "Elementos da tabela periodica";

let btn = document.querySelector('#botao');

btn.addEventListener('click', updateButton);

function updateButton() {

    if (btn.value === "Me clique!") {
        btn.value = "Obrigado";
    }
    else {
        btn.value = "Me clique!"
    }

}

function alerta() {
    alert("Voce nacabou de clicar!");
}

