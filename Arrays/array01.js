// Metodos - every() -- some() -- forEach() -- filter -- map()


let aray = [5, 4, 'carne', false]
let arayDeNumeros = []
arayDeNumeros = aray.map(function(el) {
    if (typeof(el) === 'number') {
        return el * el
    } 
})
console.log(arayDeNumeros)