/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './style.css'


class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      numero: 0,
      botao: 'Go'
    }
    this.timer = null;
this.go = this.go.bind(this);
this.clear = this.clear.bind(this);

  
  }

  go(){
    let state = this.state

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      this.state.botao = 'Go'
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      },100);
      state.botao = 'Pause'

     }
     this.setState(state)
     
  }

  clear(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state
    state.numero = 0
    state.botao = 'Go'
    this.setState(state);
  }


  render(){
    return(
      <div className='container'>
        <img src={require('./assets/cronometro.png')} className='imagem' />
        <a className='timer'>{this.state.numero.toFixed(1)}</a>
      
      <div className='areabton'>
        <a className='btn'onClick={this.go}>{this.state.botao}</a>
        <a className='btn'onClick={this.clear}>Clear</a>
      </div>
     </div>
    )
  }
    
}

export default App;
