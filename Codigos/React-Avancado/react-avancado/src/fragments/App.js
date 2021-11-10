import React, { Fragment } from "react"

const store = ['','','']

function Column() {
    return(
        <tr>
            <td>Tênis</td>
            <td>Roupa</td>
        </tr>
    )
}

function App() {

    const renderColumn = (element,key) => {
        return(
        <Fragment key={`column${key}`}>
            <Column/>
        </Fragment>
        )
    }

    return(
        <>
            <table>
                {store.map(renderColumn)}
            </table>
        </>
    )
}

export default App