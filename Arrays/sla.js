let msg = 'R$250.00  x 12 R41000.00'

let msg2 = msg.slice(msg.indexOf('x')+2)

let msg3 = (Array.from(msg2)).reverse()

let msg4 = msg3.slice(msg3.indexOf('R')+2)

console.log(parseInt(msg4.reverse().join('')))





