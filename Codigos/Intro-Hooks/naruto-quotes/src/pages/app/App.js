import styled from 'styled-components'
import { Quotes } from '../../components'
import narutoImg from '../../images/naruto.png'
import { getQuote } from '../../services'
import { useState, useEffect, useRef } from 'react'
import jutsuSound from '../../sounds/jutsu.mp3'

const audio = new Audio(jutsuSound)

export function App() {
  let isMounted = useRef(true)

  const [quoteState, setQuoteState] = useState({ quote: 'Loading quote...', speaker: 'Loading speaker...' })

  const onUpdate = async () => {
    const quote = await getQuote()
    
    if(isMounted.current){
      setQuoteState(quote)
      audio.play()
    }

  }

  useEffect(() => {
    onUpdate()

    return () => { isMounted.current = false }
  }, [])

  return (
    <Content>
      <Quotes {...quoteState.quote} onUpate={onUpdate}/>
      <NarutoImg alt="naruto segurando kunai"  src={narutoImg}/>
    </Content>
  )
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`

