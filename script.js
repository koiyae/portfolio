let botao;
let divContainers;

document.addEventListener('DOMContentLoaded', function () {
    botao = document.getElementById('discord');

    if (botao) {
        let textoParaCopiar = 'koiyae';

        botao.addEventListener('click', function () {
            copiarTextoParaClipboard(textoParaCopiar);
        });
    } else {
        console.error('RECEBA');
    }

    function copiarTextoParaClipboard(texto) {
        navigator.clipboard.writeText(texto)
            .then(() => {
                alert('ID DO DISCORD COPIADO');
            })
            .catch(err => {
                console.error('RECEBA: ', err);
                alert('RECEBA');
            });
    }

    divContainers = document.querySelectorAll('.div-container');

    function pressClass(event) {
        event.currentTarget.classList.add('pressed');
    }

    function releaseClass(event) {
        event.currentTarget.classList.remove('pressed');
    }

    divContainers.forEach(divContainer => {
        divContainer.addEventListener("mousedown", pressClass);
        divContainer.addEventListener("mouseup", releaseClass);
        divContainer.addEventListener("mouseleave", releaseClass);
    });

    function mouseOver(event) {
        event.currentTarget.classList.toggle('hover');
    }

    function mouseOut(event) {
        event.currentTarget.classList.toggle('hover');
    }

    divContainers.forEach(divContainer => {
        divContainer.addEventListener("mouseover", mouseOver);
        divContainer.addEventListener("mouseout", mouseOut);
    })

})


