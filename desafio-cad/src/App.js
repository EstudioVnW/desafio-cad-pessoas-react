import React, { Component } from 'react';

import Editar from './Editar'; 
import Nova from './Nova'; 
import Dados from './Dados';
import Lista from './Lista';
import './App.css';

import { Switch, Route, Link } from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pessoas: [
        {
          nome: "Julia Maria de Freitas",
          nascimento: "2018-09-10T18:29:26.920Z",
          rg: "1334081571",
          cpf: "056.098.120-72",
          endereco: "Rua da Mangueira, 560",
          cep: "48901-190",
          bairro: "Pedra do Lorde",
          cidade: "Juazeiro",
          estado: "Bahia"
        },
        {
          nome: "Julia Maria de Freitas",
          nascimento: "2018-09-10T18:29:26.920Z",
          rg: "1334081571",
          cpf: "056.098.120-72",
          endereco: "Rua da Mangueira, 560",
          cep: "48901-190",
          bairro: "Pedra do Lorde",
          cidade: "Juazeiro",
          estado: "Bahia"
        },
        {
          nome: "Julia Maria de Freitas",
          nascimento: "2018-09-10T18:29:26.920Z",
          rg: "1334081571",
          cpf: "056.098.120-72",
          endereco: "Rua da Mangueira, 560",
          cep: "48901-190",
          bairro: "Pedra do Lorde",
          cidade: "Juazeiro",
          estado: "Bahia"
        }
      ],
    }
  }
  dados = () => {
    return null
  }
  editar = () => {
    return null
  }
  nova = () => {
    return null
  }
  render() {
    const { pessoas } = this.state;

    return (
      <div className="App">
        <header className="title">
          <h1>Cadastro de Pessoas</h1> 
        </header>
        <main className="box-data">
          <Lista pessoas={ pessoas } />
          <section>
            <div>
                <h3>Pessoa selecionada</h3>
            </div>
            <Switch>
              <Route exact path="/" component={Dados}/>
              <Route exact path="/editar" component={Editar}/>
              <Route exact path="/nova" component={Nova}/>
            </Switch>          
            <div>
              <Link to="/Dados"></Link>
              <Link to="/Nova"><button >Adicionar nova</button></Link>
              <Link to="/Editar"><button >Editar</button></Link>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
