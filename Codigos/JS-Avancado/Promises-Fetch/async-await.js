//Lidar com promises de maneiras mais simples

const simpleFunc = async () => {
    const data = await asyncTimer() //Espera ser resolvido antes de retornar
    return data
}

const asyncTimer = () => new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(12345)
    }, 1000);
})

simpleFunc()
    .then(data => console.log(data))