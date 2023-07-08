// Metodos -- push(), pop(), shift(), unshit, slice(), splice()
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14]
console.log(arr)

console.log('------------------------------------')

console.log(arr.push(false, true, 'meu filho'))
console.log(arr)

console.log('------------------------------------')

console.log(arr.pop(), arr.pop(), arr.pop())
console.log(arr)

console.log('------------------------------------')

console.log(arr.shift())
console.log(arr)

console.log('------------------------------------')

console.log(arr.unshift(1, 2, 3, 4))
console.log(arr)

console.log('------------------------------------')

let arr2 = arr.slice(2,5)
console.log(arr2)
console.log(arr)

console.log('------------------------------------')

arr.splice(5)
console.log(arr)