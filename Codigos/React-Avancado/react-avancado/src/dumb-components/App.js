import React, { useState } from "react"
import Button from "./components/Button"
import Calc from "./components/Calc"

function App() {

    const [value, setValue] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(30)

    const handleClick = () =>{
        setMin(10)
        console.log('adicionado ao carrinho')
    }

    const handleCalc = () => {
        setValue(min + max)
    }

    return(
        <>
            <div>       
                <Button onClick={handleClick}>
                    Adicionar ao carrinho
                </Button>
            </div>
            <div>
                <h3>Valor Calculado: {value}</h3>
                <Calc
                    min={min}
                    max={max}
                    onChange={handleCalc}
                />
            </div>
        </>
    )
}

export default App