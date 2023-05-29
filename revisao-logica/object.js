// const pessoa = {
//     nome: 'Kauan',
//     idade: 17,
//     email: 'kayangomes849@gmail.com'
// }
// for( nome in pessoa){
//     console.log(nome, ':' , pessoa[nome])
// }


const produto = {
    nome: 'caneta',
    quanttidade: 10,
    comprar(n){
        if(n > this.quanttidade)
            return 'Sem estoque para essa quantidade'
        this.quanttidade -= n
    }
}

console.log(produto)

produto.comprar(11)
console.log(produto)    