import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import jutsuSound from '../../sounds/jutsu.mp3'
import { Quotes } from '../../components'
import { getQuote } from '../../services'
import narutoImg from '../../images/naruto.png'

const audio = new Audio(jutsuSound)

export function App() {
  let isMounted = useRef(true)

  const [quote, setQuote] = useState({
    speaker: 'Loading speaker...', 
    quote: 'Loading quote...'
  })

  const onUpdate = async () => {
    const resQuote = await getQuote()
    
    if(isMounted.current){
      setQuote(resQuote)
      audio.play()
    }

  }

  useEffect(() => {
    onUpdate()

    return () => { 
      isMounted.current = false 
    }
  }, [])

  return (
    <Content>
      <Quotes {...quote} onUpdate={onUpdate}/>
      <NarutoImg alt="naruto segurando kunai"  src={require(`../../images/${quote.speaker.includes("Loading")? 'Naruto_Uzumaki' : quote.speaker.replace(" ","_")}.png`).default}/>
    </Content>
  )
}

const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`

const NarutoImg = styled.img`
  max-width: 50vw;
  max-height: 80vh;
  align-self: flex-end;
`

