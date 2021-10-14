const users = ['Fred', 'Carla', 'Jennifer']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Fred',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Carla',
        age: 32,
        gender: gender.WOMAN
    },
    {
        name: 'Jennifer',
        age: 21,
        gender: gender.WOMAN
    },
]

//Retorna a quantidade de itens de um array
console.log('Items: ', persons.length)

//Verificar se é array
console.log('A variável persons é um array?: ', Array.isArray(persons))

//Iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name},${index}`, arr)
})

//Filter array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\nNova lista apenas com homens: ', mens)

//Retorna um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JS'
    return person
})

console.log('\nPessoas com a adição do course: ', personsWithCourse)

const totalAge = persons.reduce((age,person) => {
    age += person.age
    return age
},0)

console.log('\nSoma das idades das pessoas: ', totalAge)

//Juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 == 0)
                        .reduce((age,person) => {
                            age += person.age
                            return age
                        },0)

console.log('\nSoma das idades pares das pessoas: ', totalEvenAges)