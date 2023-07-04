const cadastrar = document.getElementById("cadastrar")
const checkbox = document.getElementById("contrato")

function enableOrDisableButton(){
    if(checkbox.checked){
        cadastrar.disabled = false
    }
    else{
        cadastrar.disabled = true
    }   
}