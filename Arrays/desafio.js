function sum(){
    let soma = 0
    let aray = Array.from(arguments)

    aray.forEach(function(n) {
        soma += n
    });
    return soma
}

function avarute() {
    return sum(...arguments) / arguments.length
}
   
console.log(avarute(10, 4, 1))