// function multiply(a,b = 1) {
//     return a * b
// } //Atribuição de valores padrões para caso o 
// usuário não passar o valor ou passar undefined


// function multiply(a = b,b = 1) {
//     return a * b
// } //Não é possível atribuir uma variável como default de outra
// antes dela ser definida


//Lazy Evaluation

function multiply(a,b = randomNumber()) { //Função é somente executada quando não é passado o parâmetro
    return a * b
}

function randomNumber(){
    return parseInt(Math.random() * 10)
}

console.log(multiply(3))