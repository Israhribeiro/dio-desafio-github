//Generators são funções com pausas

function* hello(){
    console.log('Hello')
    yield 1

    console.log('From')
    const value = yield 2

    console.log(value)
}

var it = hello()

console.log(it.next())
console.log(it.next())
console.log(it.next('The Other Side'))

function* fibonacciNumbers(){
    let number = 0
    var temp = 0
    yield number
    let lastnumber = number
    number++
    while(true){
        yield number
        temp = number
        number += lastnumber
        lastnumber = temp
    }
}

var it = fibonacciNumbers()

for(let i = 0; i < 6; i++){
    console.log(it.next())
}

const obj = {
    values: [1,2,3,4,5],
    *[Symbol.iterator](){
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i];      
        }
    }
}

for(let value of obj){
    console.log(value)
}

//Generator podem ser usados para coisas assíncronas