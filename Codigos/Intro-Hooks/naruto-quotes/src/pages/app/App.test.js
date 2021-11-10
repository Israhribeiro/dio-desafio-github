import { render, screen } from '@testing-library/react'
import { App } from './App'

test('render the app with a button, an img and a quote', () =>{
    render(<App/>)

    const buttonEl = screen.getByRole('button')    
    const imageEl = screen.getByRole('img')   
    const textEl = screen.getByText(/Speaker/)
    
    expect(buttonEl).toBeInTheDocument()
    expect(imageEl).toBeInTheDocument()
    expect(textEl).toBeInTheDocument()
})