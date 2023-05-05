let usuario = "capitaochefe"
let senha = "Kauan3382"

let usuariotemporario = "capitaochefe"
let senhatemporario = "Kauan3382"

let validarUsuario = (usuario === usuariotemporario && senha === senhatemporario)
if (validarUsuario === true)
    console.log(`Seja bem vindo ${usuario} `)
else
    console.log("Usuario ou senha incorretos")