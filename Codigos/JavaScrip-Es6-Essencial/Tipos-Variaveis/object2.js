const user = {
    name: 'Gabriel',
    lastName: 'Hernandes'
}

//Recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user))

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user))

//Retorna um array de arrays contendo [ nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user))

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Gabriel Hernandes Ferreira da Silva Costa'})

console.log('\nAdiciona a propriedade fullName no objeto user: ', user)
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({},user,{age: 26}))

const newObj = { foo: 'bar' }
Object.freeze(newObj)

newObj.foo = 'changes'
delete newObj.foo
newObj.bar = 'foo'

console.log('\nVariável newObj após as alterações: ', newObj)

const person = { name: 'Guilherme' }
Object.seal(person)

person.name = 'Helena'
delete person.name
person.age = 32

console.log('\nVariável person após as alterações', person)