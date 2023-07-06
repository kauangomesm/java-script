// indexOf(), lastIndexOf(), includes(), find(), findIndex()


let arr = [4, 5, 1, 7, 5, 9, 5]
n = 50
console.log('indexof() ',arr.indexOf(n)) // retorna o indice do primeiro numero encontrado

console.log('lastindexof() ', arr.lastIndexOf(n)) // retorna o indice do ultimo numero encontrado

console.log('incluse() ', arr.includes(n)) // retorna um booleano dependendo se o numero for encontrado ou não

console.log('find() ', arr.find(function(numero) {
    return numero > 0
})) // retorna um numero do array que satisfaça a condição

console.log('findIndex() ', arr.findIndex(function(numero) {
    return numero > 0
})) // retorna o indice do primeiro numero que satisfaça a condição