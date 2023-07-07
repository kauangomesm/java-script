// Metodos - every() -- some() -- forEach(function) -- filter(function) -- map(funtion)


let aray = [5, 4, 'carne', false]
let arayDeNumeros = []
arayDeNumeros = aray.map(function(el) {
    if (typeof(el) === 'number') {
        return el * el
    } 
})
console.log(arayDeNumeros)