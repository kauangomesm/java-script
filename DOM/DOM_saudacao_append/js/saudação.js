(function(){
    const nome = "kauan"
    if (nome){
        const elemento = document.createElement("div")
        elemento.className = "top-bar"
        elemento.innerHTML = `<p>Bem-vindo, <b>${nome}</b></p>`
        const elementoPai = document.querySelector(".hero")
        elementoPai.insertBefore(elemento, elementoPai.firstElementChild)
    }
})()