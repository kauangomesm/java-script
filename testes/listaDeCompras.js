console.log("Lista de compras");
const listaDeCompras = [];

while (true) {
  let item = prompt("Oque deseja comprar(item / nada)");
  if (item === "nada") break;
  else listaDeCompras.push(item);
}
alert(listaDeCompras);
while (listaDeCompras.length > 0 || true) {
  let item = prompt(
    'deseja remover algum item (responda com o item ou com "n")'
  );
  if (item === "n") {
    alert("OK entao, essa e sua lista");
    break;
  } else
    for (i = 0; i < listaDeCompras.length; i++) {
        console.log(listaDeCompras[i])
      if (listaDeCompras[i] === item) {
        listaDeCompras.splice(i, 1);
        break;
      }
    }
}
alert(listaDeCompras);