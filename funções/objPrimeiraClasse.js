function primeira(segunda){
    console.log('Função padrão')
    typeof segunda === "function" && segunda()
}
function quarta(){
    console.log('Função fora da função')
}

primeira()