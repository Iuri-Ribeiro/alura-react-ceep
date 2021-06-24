import React, { Component } from 'react';
import CardNota from './CardNota.jsx';

class ListaDeNotas extends Component {
    state = {}
    render() {
        return (
            <ul>
                <li>
                    <CardNota />
                </li>
                <li>
                    <CardNota />
                </li>
                <li>
                    <CardNota />
                </li>
            </ul>
        );
    }
}

export default ListaDeNotas;