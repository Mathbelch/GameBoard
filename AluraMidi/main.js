function tocaSom(id) {
    const elemento = document.querySelector(id);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Error: Elemento não encontrado.');
    };
}
const listaDeTeclas = document.querySelectorAll('.tecla');
alert("Ative o som para iteragir com o painel")

for(let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i]; 
    const instrumento = tecla.classList[1];    
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        };
    };

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    };

}