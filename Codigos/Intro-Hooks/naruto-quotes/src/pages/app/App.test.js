import { render, screen, fireEvent } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import '@testing-library/jest-dom'
import { App } from './App'

const response = { speaker: 'test Speaker', quote: 'test quote' }

const server = setupServer(
    rest.get("http://127.0.0.1:5000", (req,res,ctx) => {
        return res(ctx.json(response))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('render the app with a button, an img and a quote', () =>{
    render(<App/>)

    const buttonEl = screen.getByRole('button')    
    const imageEl = screen.getByRole('img')   
    
    expect(buttonEl).toBeInTheDocument()
    expect(imageEl).toBeInTheDocument()
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