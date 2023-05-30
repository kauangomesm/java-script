const dados = [
  {
    nome: "Gustavo",
    idade: 18,
  },
  {
    nome: "Vitoria",
    idade: 17,
  },
  {
    nome: "Claudio",
    idade: 47,
  },
  {
    nome: "Bruna",
    idade: 15,
  },
  {
    nome: "Gilberto",
    idade: 90,
  },
];
for (c in dados) {
  console.log(`${dados[c].nome} tem ${dados[c].idade} anos`);
}
