// console.log("Lista de comprar!!");

// const pessoas = {
//   kauan: ["arroz", "feijão", "oleo", "azeite", "pepino"],
//   angela: ["açucar", "leite", "leite condençado"],
//   wanderson: ["picanha", "contra-file", "alcatra", "linguiça"],
// };

// let pessoa = 'wanderson'


// for (c in pessoas[pessoa]) {
//   console.log(pessoas[pessoa][c]);
// }


const preco = {
    lapis: 2.00,
    caderno: 15.00,
    borracha: 3.50,
    caneta_azul: 152.99,
    caneta_preta: 1.00,
    aumentarpreco(n, p){
        this[n] += p
    },
    reduzirpreco(n, p){
        if (p > this[n])
            return
        this[n] -= p
    }
}
console.log('Valor anterior')
console.log(preco)

preco.aumentarpreco('lapis', 1)
preco.reduzirpreco('caderno', 5)
console.log('Valor posterior')
console.log(preco)


