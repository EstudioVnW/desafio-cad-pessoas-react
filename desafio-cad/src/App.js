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
          id: "1" ,
          nome: "Adriana da Silva",
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
          id: "2" ,
          nome: "Breno das Flores",
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
          id: "3" ,
          nome: "Carlos Eduardo de Souza",
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
          id: "4" ,
          nome: "Juliana Cadide",
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
          id: "5" ,
          nome: "Maria Alice Ribeiro",
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
          id: "6" ,
          nome: "Maria Cicera Madalena",
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
          id: "7" ,
          nome: "Neide Maria Ribeiro",
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
          id: "8" ,
          nome: "Osvaldo dos Santos",
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
          id: "9" ,
          nome: "Ygor Ribeiro",
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
          id: "10" ,
          nome: "Valdir Papel",
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
          id: "11" ,
          nome: "Zima de Oliveira",
          nascimento: "2018-09-10T18:29:26.920Z",
          rg: "1334081571",
          cpf: "056.098.120-72",
          endereco: "Rua da Mangueira, 560",
          cep: "48901-190",
          bairro: "Pedra do Lorde",
          cidade: "Juazeiro",
          estado: "Bahia"
        }
      ]
    };
    this.getPessoa = this.getPessoa.bind(this);
  }
  getPessoa(id){
    return this.state.pessoas.find((item) => item.id === id)
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
          <section className="box-internal">
            <div>
                <h3>Pessoa selecionada</h3>
            </div>
            <Switch>
              <Route exact path="/:id" render={(props) => <Dados {...props} getPessoa={this.getPessoa} />}/>
              <Route exact path="/editar" component={Editar}/>
              <Route exact path="/nova" component={Nova}/>
            </Switch>          
            <div>
              <Link to="/Dados"></Link>
              <Link to="/Nova"><button >Adicionar nova</button></Link>
              <Link to="/Editar"><button onClick={this.getPessoa}>Editar</button></Link>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
