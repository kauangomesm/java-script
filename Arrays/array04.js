let arr1 = [1, 2, 3]
let arr2 = [].concat(arr1)
arr2[arr2.length] = "novo valor"

console.log(arr1)
console.log(arr2)