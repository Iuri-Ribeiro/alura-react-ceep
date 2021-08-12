import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import './assets/index.css';
import './assets/App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            notas: [],
            categorias: []
        };
    }

    criarNota(titulo, texto) {
        const novaNota = { titulo, texto };
        const novoArrayNotas = [...this.state.notas, novaNota]
        const novoState = {
            notas: novoArrayNotas
        }
        this.setState(novoState);
    }

    deletarNota(index) {
        let arrayDeNotas = this.state.notas;
        arrayDeNotas.splice(index, 1);
        this.setState({ notas: arrayDeNotas });
    }

    adicionarCategoria(valorCategoria) {
        const novoArrayCategorias = [...this.state.categorias, valorCategoria];
        const novoState = {
            categorias: novoArrayCategorias
        }
        this.setState(novoState);
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro criarNota={this.criarNota.bind(this)} />
                <main className="conteudo-principal">
                    <ListaDeCategorias
                        categorias={this.state.categorias}
                        adicionarCategoria={this.adicionarCategoria.bind(this)} />
                    <ListaDeNotas
                        notas={this.state.notas}
                        deletarNota={this.deletarNota.bind(this)} />
                </main>
            </section>
        );
    }
}

export default App;
