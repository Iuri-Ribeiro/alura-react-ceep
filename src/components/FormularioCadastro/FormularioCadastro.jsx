import React, { Component } from 'react';
import './estilo.css';

class FormularioCadastro extends Component {
    state = {}
    render() {
        return (
            <form className="form-cadastro">
                <input type="text" placeholder="Título" className="form-cadastro_input"></input>
                <textarea rows={15} placeholder="Escreve sua nota..." className="form-cadastro_input" />
                <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;

