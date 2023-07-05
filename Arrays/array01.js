const aray = [5, 4, 'carne', false]
let arayDeNumeros = []
arayDeNumeros = aray.some(function(elemento) {
    return typeof elemento === "boolean"
})
console.log(arayDeNumeros)