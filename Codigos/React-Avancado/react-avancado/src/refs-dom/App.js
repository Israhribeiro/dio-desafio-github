import React, { useEffect, useRef } from "react"

function App() {

    const inputRef = useRef()
    const count = useRef(1)

    const handleClick = () => {
        inputRef.current.focus()
    }

    useEffect(() => {
        setTimeout(() => {
            count.current = 300
        }, 3000);
    })

    return(
        <>
            <h1>Valor do count: {count.current}</h1>
            Foco: <input ref={inputRef}/>
            <br/>
            <button onClick={handleClick}>focar</button>
        </>
    )
}

export default App