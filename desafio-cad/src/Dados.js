import React, { Component } from 'react';


class Dados extends Component{
  constructor(props){
    super(props);
    this.state = {
      pessoas: this.props.getPessoa(this.props.match.params.id)
    }
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.id !== nextProps.match.params.id){
      this.setState({ pessoas: this.props.getPessoa(nextProps.match.params.id)});
    }
  }
  render() {
    console.log(this.state.pessoas)
      return(
        <section className="box-zero">
          <div className="box-primary"> 
            <p>Nome: {this.state.pessoas.nome}</p> 
            <p>Nascimento: {this.state.pessoas.nascimento}</p>
          </div>
          <div className="box-secondary">
            <p>RG: {this.state.pessoas.rg}</p>
            <p>CPF: {this.state.pessoas.cpf}</p>
          </div>
          <div className="box-tertiary">
            <p>Endereço: {this.state.pessoas.endereco}</p>
            <p>CEP: {this.state.pessoas.cep}</p>
          </div>
          <div className="box-quaternary">
            <p>Bairro: {this.state.pessoas.bairro}</p>
            <p>Cidade: {this.state.pessoas.cidade}</p>
            <p>Estado: {this.state.pessoas.estado}</p>
          </div>
        </section>
      )
  }
}


export default Dados;