
function calcualrMedia() {
    if (arguments.length === 0){
        return 0
    }
    soma = 0
    resultado = 0
        for (let c = 0; c < arguments.length; c++){    
            if(typeof arguments[c] !== 'number'){
                throw Error('only numbers')
            }
            else{
                soma += arguments[c]
            }
            }
    return soma/arguments.length
         
}
calcualrMedia(4,2)
