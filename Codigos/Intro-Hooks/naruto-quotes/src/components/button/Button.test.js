import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { Button } from './button'

test('render button with text', () => {
    
    render(<Button>Test</Button>)

    const buttonEl = screen.getByText('Test')

    expect(buttonEl).toBeInTheDocument()
})