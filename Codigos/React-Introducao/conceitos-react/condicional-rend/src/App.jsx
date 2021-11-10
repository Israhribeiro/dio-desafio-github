import React from 'react'

const buttonA = <button>Histórico dos Clientes</button>
const buttonB = <button>Cadastrar Cliente</button>


const hasCostumer = true

const customers = [
    {
        id: 1,
        name: 'Sergio Alberto',
        skills: ["HTML", "Css", "JS"]
    },
    {
        id: 2,
        name: 'João Silva',
        skills: ["C#", "Python", ".NET"]
    },
    {
        id: 3,
        name: 'Maria Menezes',
        skills: ["Assembly", "Cobol", "C", "C++"]
    },
    {
        id: 4,
        name: 'Renata Ferreira',
        skills: ["Ruby", "Elixir", "Java", "Go"]
    },
]

const App = () => {
    
    const name = 'Digital Inovation One'

    const deleteButton = <button onClick={showEvent}>Mostrar Evento</button>
    
    const handleClick = (e, id) => {
        console.log('deletarCliente')
        console.log(`ID do Cliente: Cliente ${id}`)
    }

    const renderCostumer = (customer, index) => {
        return(
            <div>
                <li key={`customer-${customer.id}`}>
                    {customer.name} 
                    <button onClick={e => handleClick}>Deletar Cliente</button>
                </li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return(
            <div>
                <li key={`skill-${index}-${customer.id}`}>
                    {skill}
                </li>
            </div>
        )
    }
    
    const renderShowHistory = (
        <div>
            Clique abaixo para histórico de Clientes
            {buttonA}
        </div>
    )
    
    const renderAddCustomer = (
        <div>
            Clique abaixo para Cadastrar Cliente
            {buttonB}
        </div>
    )
    
    const showEvent = (e) => {
        console.log('Evento clicado')
        console.log(e)
        alert(name)
    }

    const showCustomer = () => {
        if(!hasCostumer) return null
        return(
            <h1>Nome do Cliente: Israel Tavares Ribeiro</h1>
        )
    }

    const handleChange = (e) => {
        const { value } = e.target
        console.log(value)
    }

    return(
        <div>
            <p>Digital Inovation One!</p>
            <p>Bem vindo a nossa aula =D</p>
            {/* {hasCostumer &&
                <div>
                    Abaixo Histórico de Clientes
                    {buttonA}
                </div>
            } */}
            {hasCostumer ? renderShowHistory : renderAddCustomer}
            <div>
                {showCustomer()}
            </div>
            <div>
                <ul>
                    {customers.map(renderCostumer)}
                </ul>
            </div>
            <input type="text" onChange={handleChange}/>
            <deleteButton/>
        </div>
    )
}

export default App