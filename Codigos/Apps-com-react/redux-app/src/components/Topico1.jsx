import React,{ useEffect, useState } from 'react'
import styledComponents from 'styled-components'
import styled from 'styled-components'

const Topico1Black = styled.div`
    display: flex;
    flex-direction: column;
`

const Item = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    border: 1x solid #cecece;
`

export const Topico = () => {
    const [cientistas, setCientistas] = useState([])


    useEffect(() => {
        fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
            .then(response => response.json())
            .then(data => {
                setCientistas(data)
            })
            .catch(error => {
                alert('Ops! Erro a seguir: ' + error)
            })
    },[])

    return(
        <Topico1Black>
            <h1>Cientistas Brasileiras</h1>
            <ul>
                {cientistas.map((cientista,index) => {
                    <Item key={index}>
                        <div><b>nome:</b> {cientista.name} </div>
                        <div><b>área:</b> {cientista.area} </div>
                    </Item>
                })}
            </ul>
        </Topico1Black>
    )
}