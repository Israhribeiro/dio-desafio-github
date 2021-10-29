class CustomError extends Error{
    constructor({message,data}){
        super(message)
        this.data = data
    }
}

try{
    const name = 'Henrique Junior'

    const myError = new CustomError({ message: 'Custom message', 
    data : {
        type: 'Server error'
    } })

    throw myError
}catch(err){
    console.log('Erro: ' ,err)
}finally{ //Executar caso tiver erro ou não
    console.log('Keep going...')
}