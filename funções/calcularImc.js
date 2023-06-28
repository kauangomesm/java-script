function calculoImc(n1,n2,cb){
    let imc = 0 
    if(typeof n1 === "undefined" && typeof n2 === "undefined"){
        throw Error("Nenhum valor digitado")
    }
    else if(typeof n1 !== "number" || typeof n2 !== "number"){
        throw Error("only numbers")
    }
    imc = n1/n2**2
    if (typeof cb === 'function'){
        return cb(imc)
    }
    else{
        return imc
    }
}
function resultadoImc(n1){
    let resposta = ''
    if(typeof n1 === "undefined"){
        throw Error("Nenhum valor digitado")
    }
    else if(typeof n1 !== "number"){
        throw Error("only number")
    }
    else{
            if (n1 >40){
                return 'Obesidade Grau III'}

            else if (n1 >=35){
                return 'Obesidade Grau II'}

            else if  (n1 >=30){
                return 'Obesidade Grau I'}
                
            else if  (n1 >=25){
                return 'Acima do peso'}
            
            else if  (n1 >= 18.5){
                 return 'Peso normal'}
            
            else if  (n1 >= 17){
                return 'Abaixo do peso'}
        
            else if  (n1 >= 16){
                return 'Muito abaixo do peso'}
    }
}
console.log(calculoImc(64,1.67,resultadoImc))