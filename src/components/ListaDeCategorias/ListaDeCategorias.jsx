import React, { Component, Fragment } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component {
    render() {
        return (
            <section>
                <ul>
                    <li>Futebol</li>
                    <li>Games</li>
                    <li>Faculdade</li>
                    <li>Trabalho</li>
                </ul>
                <input type="text" />
            </section>
        );
    }
}

export default ListaDeCategorias;