function aleatorizar(m){
    return parseInt(Math.random() * m)
}

let aray = []

while(aray.length < 10){
    let numero = aleatorizar(20)
    if(aray.indexOf(numero) === -1)
        aray.push(numero)
}
console.log(aray)