var arr = ['Apple', 'Banana', 'Orange', ['Tomato']] 
var arr2 = [{name: 'Grape', type: 'fruit'}]

var [apple,banana,orange,[tomato]] = arr

console.log(apple,banana,orange,tomato)

var obj = {
    name: "Albertinho",
    props: {
        age: 26,
        fvColors: ['black','blue']
    }
}

var { name } = obj
var { props: {age, fvColors: [color1,color2]}} = obj
var [{name : fruitName, type}] = arr2

console.log(name, age,color1,color2) 
console.log(fruitName,type) 

function sum([a,b] = [0,0]){
    return a + b
}

console.log(sum([5,5]))
console.log(sum())