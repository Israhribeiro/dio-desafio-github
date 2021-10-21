//Função tradicional
function log(value){
    console.log(value)
}

//Funções anônimas
const sum = function(a,b){
    return a + b
}

console.log(sum(1,3))

//Arrow Functions =>

const nome = nome => console.log(nome)

nome("Pedro")

const multiplicacao = (a,b) => a*b

const numPar = num => {
    if(num % 2){
        return true
    }
    return false
}

console.log(numPar(3))

const pessoa = (nome,sobrenome) => ({nome,sobrenome})

console.log(pessoa("Pedro","Luis"))

/*const car = () => {
    this.foo = 'bar'
}*/ // Não dá pra fazer função construtora com arrow function

//print("Valor") //Hoisting não funciona com arrow function

var print = value => console.log(value) 

var obj = {
    showContext: function showContext(){
        this.log('teste')

        setTimeout(() => {
            this.log('after 1000ms') //Sem necessidade do uso do bind para mudar o contexto da função
        },1000)
    },
    log: function log(value){
        console.log(value)
    }
}

obj.showContext()