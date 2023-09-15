(function () {
    'use strict';
    const titulo = document.querySelector('#txtTitulo')
    const descricao = document.querySelector('#txtDescricao')
    const checkbox = document.querySelector('#chkAceito')
    const botao = document.querySelector('#btn')
    const form = document.querySelector('.formCadastro')
    const contador_container = document.querySelector('#contador')
    const contador = contador_container.getElementsByTagName('span')[0]
    const maximo = descricao.maxLength
    const feedbakMessage = document.getElementById('feedbackMessage')
    const PFeedbackMessage = document.querySelector('#feedbackMessage p')
    const closeFeedbackMessage = document.querySelector('#feedbackMessage button')

    form.addEventListener('submit', (evt) => {
        if(!titulo.value){
            showErrorMsg('campo vazio', () => {
                titulo.focus()
            })
            evt.preventDefault()
        }
    })

    function showErrorMsg(msg, cb){
        feedbakMessage.classList.add('show')
        PFeedbackMessage.textContent = msg

        closeFeedbackMessage.focus()

        function hideFeedbackmessage(){
            feedbakMessage.classList.remove('show')
            closeFeedbackMessage.removeEventListener('click', hideFeedbackmessage)
            closeFeedbackMessage.removeEventListener('keyup', presskeybord)
            
            if (typeof(cb) === 'function'){
                cb()
            }
        }

        function presskeybord(evt){
            if(evt.keyCode === 27){
                hideFeedbackmessage()
            }
        }


        closeFeedbackMessage.addEventListener('click', hideFeedbackmessage)
        closeFeedbackMessage.addEventListener('keyup', presskeybord)

    }

    contador_container.style.display = 'block'
    contador.textContent = parseInt(maximo)


    descricao.addEventListener("input", function () {
        contador.textContent = parseInt(maximo) - parseInt(descricao.value.length)
    })


    botao.disabled = true
    checkbox.addEventListener('change', function () {
        botao.disabled = !this.checked
    })

})()