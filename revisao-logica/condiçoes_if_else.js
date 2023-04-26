let idade = 21
let paisPresentes = false
let comprouBilhete = false
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

console.log(`Pode Viajar: ${podeViajar}`)