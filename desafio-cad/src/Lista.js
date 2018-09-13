import React, { Component } from 'react';

class Lista extends Component{
    dados1 = () => {
        return null
    }
    render() {
        const { pessoas } = this.props
        console.log(pessoas);
        return(
            <section className="box-buttons">
                <ul className="box-buttons-ul">
                    {this.props.pessoas.map((item) => {
                        return <li>{item.nome}</li>;
                    })}
                    <li onClick={this.dados1} className="button-list" >Maria Alice Ribeiro</li>
                    <li className="button-list" >Maria Cicera Madalena</li>
                    <li className="button-list" >Neide Maria Ribeiro</li>
                    <li className="button-list" >Osvaldo dos Santos</li>
                    <li className="button-list" >Ygor Ribeiro</li>
                    <li className="button-list" >Valdir Papel</li>
                    <li className="button-list" >Zima de Oliveira</li>
                </ul>
            </section>
        )
    }
}

export default Lista;