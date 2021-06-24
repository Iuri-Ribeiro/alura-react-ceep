import React, { Component } from 'react';
import CardNota from '../CardNota/CardNota.jsx';
import './estilo.css';

class ListaDeNotas extends Component {
    state = {}
    render() {
        return (
            <ul className="lista-notas">
                {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
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