//push
var arr = ["banana", 'melancia', 'abacate']
var arrLength = arr.push('acerola')

console.log(arrLength)

console.log(arr)

//pop
var removedItem = arr.pop()

console.log(removedItem)

console.log(arr)

//unshift

arrLength = arr.unshift('laranja')

console.log(arrLength)

console.log(arr)

//shift
removedItem = arr.shift()

console.log(removedItem)

console.log(arr)

//concat

const salgados = ['coxinha', 'risole', 'bauru']
arr = arr.concat(salgados)

console.log(arr)

//slice

const frutas = arr.slice(0,3)

const novosSalgados = arr.slice(3)

console.log(frutas)

console.log(novosSalgados)

//splice

arr.splice('abacate')

console.log(arr)

arr.splice(0,0,'pêssego')

console.log(arr)
