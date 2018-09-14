import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lista extends Component{
   
    render() {
        const { pessoas } = this.props
        return(
            <section className="box-buttons">
                <ul className="box-buttons-ul">
                    {this.props.pessoas.map((item) => {
                        return <Link to={`/${item.id}`} key={item.id} className="link-list" >{item.nome}</Link>;
                    })}
                </ul>
            </section>
        )
    }
}

export default Lista;