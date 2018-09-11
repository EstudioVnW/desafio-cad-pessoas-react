import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nova extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div >
        <h1>Nova</h1>
        <section>
          <div>
            <div> 
              <p>Nome:</p> 
              <input type="text"></input>
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
            <Link to="/"><button>Cadastrar-se</button></Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Nova;