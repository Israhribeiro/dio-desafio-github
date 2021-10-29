// function soma(a: number, b: number){
//     return a + b
// }

// //types

// //interfaces

// interface IAnimal{
//     nome: string,
//     tipo: 'terrestre' | 'aquático',
//     domestico: boolean
//     // executarRugido(som: String): void
// }

// interface IFelinos extends IAnimal{
//     visaoNoturna: boolean
// }

// const animal: IAnimal = {
//     nome: 'Elefante',
//     tipo: "terrestre",
//     domestico: false
// }

// const felino: IFelinos = {
//     nome: 'Leão',
//     tipo: 'terrestre',
//     visaoNoturna: false,
//     domestico: false
// }

// interface ICanino extends IAnimal{
//     porte: 'pequeno' | 'medio' | 'grande'
// }

// type IDomestico = IFelinos | ICanino

// const animal2 : IDomestico = {
//     domestico: true,
//     nome: 'Cachorro',
//     porte: 'medio',
//     tipo: 'terrestre',
// }

const input = document.getElementById('input') as HTMLInputElement

input.addEventListener('input', event => {
    const i = event.currentTarget as HTMLInputElement
    console.log(i.value)
})

//Generic types

function adicionaAppendiceALista<T>(arr: T[],valor: T){
    return arr.map(() => valor)
}

adicionaAppendiceALista([1,2,3],1)

//Condicionais

interface IUser{
    id: string,
    email: string
    //Dado opcional
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario'
}

// interface IAdmin extends IUser{
//     cargo: 'gerente' | 'coordenador' | 'supervisor'
// }

// function redirecione(usuario: IUser | IAdmin){
//     if('cargo' in usuario){
//         //redirecionar para a área de administração
//     }else{
//         //redireciona para a área do usuário
//     }
// }

function redirecione(usuario: IUser){
    if(usuario.cargo){
        //redirecionar(usuario.cargo)
    }

    //redirecionar para a área do usuário
}

interface ICachorro{
    nome: string,
    idade: number,
    parqueFavorito?: string
}

type CachorroRO = {
    readonly [K in keyof ICachorro]-? : ICachorro[K]
}

class meuCachorro implements CachorroRO{
    idade
    nome
    parqueFavorito

    constructor(nome : string,idade: number, parqueFavorito: string){
        this.idade = idade
        this.nome = nome
        this.parqueFavorito = parqueFavorito
    }
}

const cao = new meuCachorro('Nick',7,'Iguaçu')

cao.idade = 8

// import $ from 'jquery'

// $.fn.extend({
//     novaFuncao(){
//         console.log('Chamou nova função')
//     }
// })

// $('input').novaFuncao()

interface Pessoa{
    nome: string,
    idade: number,
    nacionalidade: string
}

interface Brasileiro extends Omit<Pessoa,'nacionalidade'>{

}

const brasileiro: Brasileiro = {
    nome: 'João',
    idade: 20
}
