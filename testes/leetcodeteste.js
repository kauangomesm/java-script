console.log('Lista de compras')
let listaDeCompras = []

while (true) {
    let item = prompt('Oque deseja comprar')
    if (item === 'nada')
        break
    else
        listaDeCompras.push(item)
}
alert(listaDeCompras)
while (listaDeCompras.length > 0 || true ){
    let item = prompt('deseja remover algum item (responda com o item ou com "n")? se sim qual:')
    if (item === 'n')
        break
    else if (item in listaDeCompras)
        listaDeCompras.splice(item, 1)
    else
        alert('Item não encontrado na lista')
        break
}
alert(listaDeCompras)