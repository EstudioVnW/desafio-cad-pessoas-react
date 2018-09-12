import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Editar extends Component {
  constructor(props){
    super(props);
    this.state = {
      valor1:'',
      text:[],
    }
  }
  inpNome = (event) =>{
    this.setState({text:event.target.value});
  }
  enviar = (event) => {
    this.setState({
      valor1:this.state.text
    })
    this.setState({
      text:this.state.temp,
      temp:''
    })
  }
  render() {
    return (
      <div >
        <h1>Editar</h1>
        <section>
          <div>
            <div> 
              <p>Nome:</p> 
              <input type="text" onChange={this.inpNome}></input>
            </div>
            <div>
              <p>Nascimento:</p>
              <input type="text"></input>
            </div>
          </div>
          <div>
            <div>
              <p>RG:</p>
              <input type="text"></input>
            </div>
            <div>
              <p>CPF:</p>
              <input type="text"></input>
            </div>
          </div>
          <div>
            <div>
              <p>Endereço:</p>
              <input type="text"></input>
            </div>
            <div>
              <p>CEP:</p>
              <input type="text"></input>
            </div>
          </div>
          <div>
            <div>
              <p>Bairro:</p>
              <input type="text"></input>
            </div>
            <div>
              <p>Cidade:</p>
              <input type="text"></input>
            </div>
            <div>
              <p>Estado:</p>
              <input type="text"></input>
            </div>
          </div>
          <div>
            <Link to="/"><button onClick={this.enviar}>Atualizar</button></Link>
          </div>
          {/* <p>{this.state.valor1}</p> */}
        </section>
      </div>
    );
  }
}

export default Editar;