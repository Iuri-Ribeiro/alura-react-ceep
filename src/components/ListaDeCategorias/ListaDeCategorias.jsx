import React, { Component, Fragment } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component {

    _handleEventoInput(evento) {
        if (evento.key == 'Enter') {

        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    <li className="lista-categorias_item">Futebol</li>
                    <li className="lista-categorias_item">Games</li>
                    <li className="lista-categorias_item">Faculdade</li>
                    <li className="lista-categorias_item">Trabalho</li>
                </ul>
                <input
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;