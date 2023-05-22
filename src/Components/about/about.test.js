import {render,screen,cleanup} from '@testing-library/react'
import React from 'react'
import ReactDOM  from 'react-dom'
import About from "./About"
test('Should render about component when the text is correct',()=>{
    const{getByText}=render(<About text="Hello"/>);
    expect(getByText('Hello')).toBeInTheDocument();
    // screen.getByText("Hello")
    // render(<About/>)
    // const aboutElement=screen.getByTestId('about-1')
    // expect(aboutElement).toBeInTheDocument();
})
// const parapghElement=screen.getByText("Hello")
// expect(parapghElement).toBeInTheDocument()