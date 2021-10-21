//console.log(arguments) //Contém todos os argumentos da função

//Maneira antiga
function sum(a,b){
    var value = 0

    for (let i = 0; i < arguments.length; i++) {
        value += arguments[i];   
    }

    return value
}

console.log(sum(5,5,3,4,2))

//rest operator

function restSum(...nums){ //Coloca todos os argumentos passados num Array
    return nums.reduce((total,num) => total += num,0)
}

console.log(restSum(5,5,3,4,2))

const arrowSum = (a,b,...rest) => {
    console.log(a,b,rest)
} //É possível usar com arrow function

arrowSum(9,8,5,5,5,2,3)