var prop1 = 'DIO'

var obj = {
    prop1: prop1 //Repetição de palavras
}

console.log(obj)

//Short hand para declaração de propriedades
var nome = "Carlinhos"

function falar(){
    console.log('Coé Carlinhos')
}

var obj1 = {
    nome,
    falar,
    andar(){
        console.log("Estiloso esse andar ein Carlinhos")
    }
}

obj1.falar()
obj1.andar()

var propName = 'test'

var obj2 = {
    [propName + ' concat'] : 'value'
}

console.log(obj2)

