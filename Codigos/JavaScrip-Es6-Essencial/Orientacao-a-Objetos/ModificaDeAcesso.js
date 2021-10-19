class Person{
    #name = ''

    constructor(initialName){
        this.#name = initialName
    }

    setName(name){
        this.#name = name
    }

    getName(){
        return this.#name
    }
}