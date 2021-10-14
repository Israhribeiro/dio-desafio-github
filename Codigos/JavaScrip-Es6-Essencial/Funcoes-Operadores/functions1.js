function fn(){
    return 'Code here'
}

const arrowFn = () => 'Code here' //Return implicito
const arrowFn2 = () => {
    //Mais de uma expressão
    return 'Code here'
}

fn.prop = 'Posso criar propriedades'

console.log(fn())
console.log(fn.prop)

const logValue = value => console.log(value)
const logFnResult = fnParam => console.log(fnParam())

logFnResult(fn)

const controlFnExec = fnParam => allowed => {
    if(allowed){
        fnParam()
    }
}

const handleFnExecution = controlFnExec(fn)

handleFnExecution(true) //Executará a função
handleFnExecution() //Não executará a função

//controlFnExec como função
// function controlFnExec(fnParam){
//     return function(allowed){
//         if(allowed){
//             fnParam()
//         }
//     }
// }