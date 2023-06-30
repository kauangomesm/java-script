const campoDeEmail = document.getElementById("txtEmail")
const emailfeedback = document.getElementById("newsletterFeedback")
function enviarEmail(){
    let email = campoDeEmail.value
    emailfeedback.innerHTML = `<b>${email}</b> cadastrado com sucesso`
    
}