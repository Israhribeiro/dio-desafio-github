const EventEmitter = require('events')


class Users extends EventEmitter {
    userLogged(data){
        this.emit('User logged', data)
    }
}

const users = new Users()

users.once('User logged', data => {
    console.log(data)
})

users.userLogged({user: 'Albertinho'})
users.userLogged({user: 'Fernando'})

//EventTarget no browser
