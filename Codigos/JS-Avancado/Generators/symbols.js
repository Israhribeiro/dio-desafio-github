//Symbols
//Iteradores são interfaces

const uniqueId = Symbol('Hello')
const uniqueId2 = Symbol('Hello')

console.log(uniqueId === uniqueId2)

//Pode gerar propriedades "privadas"

var obj = {
    [uniqueId] : "Hello"
}

console.log(obj)

console.log(Object.keys(obj))

//Well known symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1,2,3,4]

const it = arr[Symbol.iterator]() //Retorna um objeto iterável com os itens desse array

while (true){
    let value = it.next()
    if(value.done){
        break
    }
}

console.log(it.next()) //Traz done true pois terminou de percorrer o iterador

for(let value of arr){ //Tem o mesmo comportamento do iterador
    console.log(value)
}

//Objetos com Symbol.iterator pode usar for of e spread

const obj2 = {
    values: [1,2,3,4,5],
    [Symbol.iterator](){
        let i = 0

        return {
            next: () => {
                i++

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

const itObj = obj2[Symbol.iterator]()

console.log(itObj.next())

var arr2 = [...obj2]

console.log(arr2)