let user = {
    name: 'Guilherme'
}

//Alterando a propriedade de um objeto
user.name = 'Carlos'
user['name'] = 'João'

const prop = 'name'
user[prop] = 'Maria'

user.lastName = 'Ferreira'

delete user.name;