function Animal(qtdePatas){
}

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde){
    Animal.call(this,4)

    this.morde = morde
}

Cachorro.prototype = Object.create(Animal) //Criar a partir da função animal
Cachorro.prototype.latir = function() {
    console.log("Au! au!")
}

const pug = new Cachorro(false)
const pitbull = new Cachorro(true)

console.log(pug)