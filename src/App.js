import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import './assets/index.css';
import './assets/App.css';
import Categorias from './dados/categorias.js';
import ArrayDeNotas from './dados/notas.js';

class App extends Component {

    constructor() {
        super();
        this.categorias = new Categorias();
        this.notas = new ArrayDeNotas();
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro
                    categorias={this.categorias.categorias}
                    criarNota={this.notas.criarNota} />
                <main className="conteudo-principal">
                    <ListaDeCategorias
                        categorias={this.categorias.categorias}
                        adicionarCategoria={this.categorias.adicionarCategoria} />
                    <ListaDeNotas
                        notas={this.notas.notas}
                        deletarNota={this.notas.deletarNota} />
                </main>
            </section>
        );
    }
}

export default App;
