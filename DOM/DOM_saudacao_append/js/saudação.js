(function(){
    const nome = ""
    const titulo = document.querySelector(".top-bar p")
    if(nome){
        titulo.innerHTML += ` <b>${nome}<b>`
    }
    else{
        // titulo.parentElement.style.display = "none"
        const removerItem = titulo.parentElement
        removerItem.parentElement.removeChild(removerItem)
    }
})()