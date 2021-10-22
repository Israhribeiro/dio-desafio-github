const doSomething = () => 
    new Promise((res,rej) => {
    setTimeout(() => {
        //did something
        res('First Data')
    }, 1000);
})

const doOtherThing = () => 
    new Promise((res,rej) => {
    setTimeout(() => {
        //did something
        res('Second Data')
    }, 1000);
})

Promise.all([doSomething(),doOtherThing()]).then(data => {
    console.log(data)
})

Promise.race([doSomething(),doOtherThing()]).then(data => {
    console.log(data)
})

doSomething()
    .then(data => {console.log(data.split('')); return doOtherThing()})
    .then(data2 => console.log(data2.split('')))
    .catch(err => console.log(err))
//Status de uma promisse 
//Pending - Em execução
//Fulfilled - Terminou de executar
//Rejected - Caso ocorra algum erro