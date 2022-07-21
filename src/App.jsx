import './index.css'
import React, { Component } from 'react'

export default class App extends Component {
  constructor( props){
    super(props)
    this.state= {
      arr: [],
      name: 'JOHN',
      inputVALUE: ''
    }
  }
  render() {
    const click=(e)=>{
      console.log(e.target,'click boldi');

    }
    const getValue = (e) => {
      console.log(e.target.value);
      // this.state.inputVALUE = e.target.value
      this.setState({inputVALUE: e.target.value})
    }
    return (
      <div>
        <h1>{this.state.inputVALUE}</h1>
        <button onClick={click}>login</button>
        <input className='input' onChange={getValue} type="text" value={this.state.inputVALUE}/>
        </div>
    )
  }
}

// add 
// push
// edit
// help