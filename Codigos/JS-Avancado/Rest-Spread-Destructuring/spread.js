const multiply = (...args) => args.reduce((total,valor) => total*valor,1)

const sum = (...rest) => {
    multiply(...rest) //Repassar elementos de uma lista como argumento
}

//Pode passar strings, arrays, objects e iterable objects
//String e arrays são naturalmente iteráveis

const str = 'Uma frase muito impactante'
const arr = [1,2,3,4,5,6,7]

function logArgs(a,b,c){
    console.log(a,b,c)
}

logArgs(...str)
logArgs(...arr)

//Construção de arrays
const arr2 = [...arr,8,9,10]

console.log(arr2)

//Objetos literais

const obj = {
    test: 123
}

const obj2 = {
    ...obj, //Só pode ser utilizado para construção de novos objetos
    outroTeste: 456
}

console.log(obj2)

//const arr = [...obj] //Não é possível pois o objeto em questão não é iterável

const obj3 = {...obj2} //Clone raso

const obj4 = { 
    test:123,
    subObj: {
        test: 123
    }
}

const obj5 = { ...obj4,subObj: { ...obj4.subObj } }