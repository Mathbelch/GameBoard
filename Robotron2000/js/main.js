/* const robotron = document.querySelector('#robotron');

robotron.addEventListener('click', () => {
    console.log("Cliquei no robô!")
});

function dizOi(nome) {
    console.log(`Oi ${nome}, Bem vindo ao Robtron 2000!`);
}

dizOi(); */



//Dados de incremento ou decremento em valores de habilidades (data-estatistica) de acordo com a peça adicionada ou removida (data-peca):
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

// Buscando todos os elementos que possuam o data attribute data-controle (todos os botões + e -)
const controle = document.querySelectorAll("[data-controle]");

// Buscando todos os elementos que possuam o data attribute data-estatistica (valor de cada habilidade)
const estatisticas = document.querySelectorAll("[data-estatistica]");

// Para cada elemento, vamos adicionar um evento que, quando clicado, irá chamar a função manipulaDados, passando o dataset de controle (+ ou -) e o pai deste elemento (que será a div de o que estamos alterando - braço, blindagem, etc.). Além disso, vamos chamar a função para atualizar o valor das estatísticas de habilidades com base na peça e na operação (+ ou -)
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle);
    });
});

// A constante peça (texto/n° a ser alterado para + ou -) será o elemento com data atribute de data-contador (input de texto no html) pai do botão que foi clicado, que será alterado conforme a operação clicada.
function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");
    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
};

// Para cada elemento das estatisticas, o conteúdo receberá o próprio conteúdo + ou - o encremento que aquela peça traz nas habilidades:
function atualizaEstatisticas(peca, operacao) {
    estatisticas.forEach( (elemento) => {
        if (operacao === "-") {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        } else {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        }
    });
};