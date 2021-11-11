import { render, screen, fireEvent } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import '@testing-library/jest-dom'
import { App } from './App'

const response = { speaker: 'Speaker', quote: 'test quote' }

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req,res,ctx) => {
        return res(ctx.json(response))
    })
)

test('render the app with a button, an img and a quote', () =>{
    render(<App/>)

    const buttonEl = screen.getByRole('button')    
    const imageEl = screen.getByRole('img')   
    const textEl = screen.getByText('/Loading speaker.../')
    
    expect(buttonEl).toBeInTheDocument()
    expect(imageEl).toBeInTheDocument()
    expect(textEl).toBeInTheDocument()
})

test('calls api on button click and update its text', async () => {
    render(<App/>)

    const buttonEl = screen.getByRole('button')

    fireEvent.click(buttonEl)

    const quoteEl = await screen.findByText(response.quote)

    expect(quoteEl).toBeInTheDocument()
})

test('calls api on startup and render it response', async () => {
    render(<App/>)
    
    const quoteEl = await screen.findByText(response.quote)

    expect(quoteEl).toBeInTheDocument()
})