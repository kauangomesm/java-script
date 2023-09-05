(function () {
    'use strict';


    const titulo = document.querySelector('#txtTitulo')
    const descricao = document.querySelector('#txtDescricao')
    const checkbox = document.querySelector('#checkbox')
    const botao = document.querySelector('#btn')
    const form = document.querySelector('.formCadastro')
    const contador_container = document.querySelector('#contador')
    const contador = contador_container.getElementsByTagName('span')[0]
    const maximo = descricao.maxLenght
    form.addEventListener('submit', (evt) => {
        if(!titulo.value){
            alert('campo vazio')
            evt.preventDefault()
            titulo.focus()
        }
    })


    contador_container.style.display = 'block'

})()