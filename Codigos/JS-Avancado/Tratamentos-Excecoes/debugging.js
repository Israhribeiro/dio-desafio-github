debugger //O navegador para exatamente nesse ponto
console.log('Teste') //Imprimir informações específicas
console.warn('Aviso') //Exibe um alerta maior com o fundo amarelo
console.error('Erro') //Fazer log de erros

console.trace() //Informações de onde o código foi executado

console.group('myGroup')
console.log('Inside group')
console.log('Other infos')
console.groupEnd('myGroup')

console.time('Log time')
setTimeout(() => {
    console.timeEnd('Log time')
},2000)

//Mostra em forma de tabela
console.table({0 : 'Linha 1', 1: 'Linha 2'}) 

//Executa um console se a condição é falsa
console.assert(1 === 1, 'Falso')

//Console log estilizado
console.log('%c styled log', 'color: red') 