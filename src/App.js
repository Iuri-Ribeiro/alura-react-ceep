import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import './assets/index.css';
import './assets/App.css';

class App extends Component {

  criarNota(titulo, texto) {
    console.log("Nova nota:", titulo, texto);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota} />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
