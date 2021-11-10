import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Button from './Button'
// import ComponentA from './ComponentA'
// import ComponentB from './ComponentB'
import './index.css';

function soma(a,b){
  alert(a + b)
}

// const App = () => {
//   return(
//     <div>
//       Teste
//       <Button onClick={() => soma(5,5)} name='Israel'/>
//       <ComponentA>
//         <ComponentB>
//           <Button onClick={() => soma(5,5)} name='Israel'/>
//         </ComponentB>
//       </ComponentA>
//     </div>
//   )
// }

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }

  componentDidMount(){
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    },3000)
  }

  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
  }

  render(){
    const { clock, copo } = this.state

    return(
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}>{copo}</button>
      </div>
    )
  }
}

const root  = document.getElementById('root')
ReactDOM.render(<App/>,root)
