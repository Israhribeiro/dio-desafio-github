//forEach
var arr = [1,2,3,4,5]

arr.forEach((value, index) => {
    console.log(`${index} : ${value}`)
})

//map

arr = arr.map(value => value * 2)

console.log(arr)

//flat
var arr2 = [1,2,[3,4]]

arr2 = arr2.flat()

console.log(arr2)

//flatMap
arr = arr.flatMap(value => [value * 3])

arr = arr.flatMap(value => [[value * 2]])

console.log(arr)

//keys
const keys = arr.keys()

console.log(keys.next())

//values
const values = arr.values()

console.log(values.next())

//entries
const entries = arr.entries()

console.log(entries.next())

//find
const firstGreaterThanTwenty = arr.find(value => value > 20)

console.log(firstGreaterThanTwenty)

//findIndex
const firstIndexGreaterThanTwenty = arr.findIndex(value => value > 20)

console.log(firstIndexGreaterThanTwenty)

//filter
const allGreaterThan30 = arr.filter(value => value > 30)

console.log(allGreaterThan30)

//indexOf
const arr3 = [1,2,3,3,4,3,5,3]

const firstIndexOf = arr3.indexOf(3)

console.log(firstIndexOf)

//lastIndexOf
const lastIndexOf = arr3.lastIndexOf(3)

console.log(lastIndexOf)

//includes
const hasItem = arr3.includes(2)

console.log(hasItem)

//some 
const hasSomeEvenNumber = arr3.some(value => value % 2 == 0)

console.log(hasSomeEvenNumber)

//every
const everyEvenNumber = arr.every(value => value % 2 == 0)

console.log(everyEvenNumber)

//sort
arr3.sort((current,next) => next - current)

console.log(arr3)

//reverse
arr3.reverse()

console.log(arr3)

//join

console.log(arr3.join(' '))

//reduce
const newNumber = arr3.reduce((total,value) => total += value,0)

console.log(newNumber)