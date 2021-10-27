const assert = require('assert')
const Math = require('../JS-Avancado/Testes-TDD-BDD/math.js')
const expect = require('chai').expect
const sinon = require('sinon')

//Mocha não recomenda o uso de arrow function

let value = 0

describe('Math class', function(){
    //hooks - executar código evitando repetição

    this.beforeEach(function() { //Faz uma ação antes de cada função de teste
        let value = 0
    })

    it('Sum two numbers', function(done){
        const math = new Math()
        this.timeout(3000) //Muda o tempo máximo em milisegundos do Mocha

        value = 5

        math.sum(value,5,value => {
           expect(value).to.equal(10)
            done() //Checa se chegou aqui para validar se o teste passou para funções assíncronas
        })
    })

    it('Multiply two numbers') //Teste pendente que ainda não foi criado

    // it.only('Sum three numbers', function() { //Exectar apenas esse teste
    //     const math = new Math()

    //     assert.equal(math.sumThree(5,5,5),15);
    // })

    it.skip('Multiply two numbers 2', function() { //Pular esse teste e marcar como pendente
        const math = new Math()

        expect(math.multiply(value,5)).to.equal(0);
    })

    it('Object expection',function(){
        const obj = {
            nome: "Julio Menezes"
        }

        const obj2 = {
            nome: "Julio Menezes"
        }

        expect(obj).to.have.property('nome').to.equal('Julio Menezes')

        expect(obj).to.deep.equal(obj2)
    })

    it.only('Calls req with sum and index values', function() {
        const req = {};
        const res = {
            load: function load(){
                console.log('Called')
            }
        }

        // sinon.spy(res, 'load')

        sinon.stub(res, 'load').returns('xpto')

        const math = new Math()

        math.printSum(req,res, 5, 5)

        expect(res.load.calledOnce).to.be.true

        expect(res.load.args[0][0]).to.equal('index')
        expect(res.load.args[0][1]).to.equal(10)
    })
})