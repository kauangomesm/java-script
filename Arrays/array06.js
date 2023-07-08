// let arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.reverse())


// let soma = arr.reduce(function(ac, at, i, ) {
//     return ac + at
// })
// console.log(soma)

const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]


let numerosUnicos = numeros.reduce( function(numero, numeroAtual) {
    if(numero.includes(numeroAtual)){
        numero.push(numeroAtual)
    }
    return numero
}, [])
console.log(numerosUnicos)