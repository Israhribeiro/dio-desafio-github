import styled from 'styled-components'

export function App() {
  return (
    <Content>
      <img/>
      <p>quote</p>
      <button>Quote no Jutsu</button>
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

