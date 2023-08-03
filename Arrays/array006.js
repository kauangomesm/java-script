/*  every() -- some() -- forEach() -- filter()

    map() -- indexOf() -- lastIndexOf() -- includes()

    find() -- findIndex() -- toString() -- join() -- concat()

    push() -- pop() -- shift() -- unshift() -- slice()

    splice() -- reverse() -- reduce()
*/


let msg = 'R$250.00  x 12 R41000.00'
console.log(parseInt((Array.from(msg.slice(msg.indexOf('x')+2))).reverse().slice((Array.from(msg.slice(msg.indexOf('x')+2))).reverse().indexOf('R')+2).reverse().join('')))














