import React, { Component } from 'react';
import Editar from './Editar'; 
import Nova from './Nova'; 
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  
  editar = () => {
    
  }
  nova = () => {
    
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Cadastro de Pessoas</h1> 
        </header>
        <main>
          <section>
            <ul>
              <li></li>
            </ul>
          </section>
          <section>
            <div>
                <h3>Pessoa selecionada</h3>
            </div>
          </section>
          <section>
            <Switch>
              <Route path="/editar" component={Editar}/>
              <Route path="/nova" component={Nova}/>
            </Switch>          
          </section>
          <section>
            <Link to="/Nova"><button onClick={this.nova} >Adicionar nova</button></Link>
            <Link to="/Editar"><button onClick={this.editar}>Editar</button></Link>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
