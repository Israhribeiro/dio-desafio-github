import React, { Component } from 'react'
import PetShop from './PetShop'

function App() {
    const handleClick = () => {
        console.log('Banho tomado')
    }
    return(
        <PetShop dogs={1} 
        customerName='Jerson' 
        onClick={handleClick}
        status='Completed'/>
    )
}

export default App