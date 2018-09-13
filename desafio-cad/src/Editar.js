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
              <input value="Maria Alice Ribeiro" type="text" onChange={this.inpNome}></input>
            </div>
            <div>
              <p>Nascimento:</p>
              <input value="04/05/1985" type="text"></input>
            </div>
          </div>
          <div>
            <div>
              <p>RG:</p>
              <input value="14570114774" type="text"></input>
            </div>
            <div>
              <p>CPF:</p>
              <input value="024.098.456-71" type="text"></input>
            </div>
          </div>
          <div>
            <div>
              <p>Endereço:</p>
              <input value="Rua dos Girassóis, 765" type="text"></input>
            </div>
            <div>
              <p>CEP:</p>
              <input value="48901-190" type="text"></input>
            </div>
          </div>
          <div>
            <div>
              <p>Bairro:</p>
              <input value="Quidé" type="text"></input>
            </div>
            <div>
              <p>Cidade:</p>
              <input value="Juazeiros" type="text"></input>
            </div>
            <div>
              <p>Estado:</p>
              <input value="Bahia" type="text"></input>
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