import React, { Component } from 'react';
import CardNota from './CardNota.jsx';

class ListaDeNotas extends Component {
    state = {}
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudos").map(categoria => {
                    return (
                        <li>
                            <div>{categoria}</div>
                            <CardNota />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;