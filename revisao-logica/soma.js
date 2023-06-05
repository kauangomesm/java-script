function somar(n1, n2){
    if(n1 != Number || n2 != Number){
        throw Error('Digite apenas numeros')
    }
    return n1+n2
}
