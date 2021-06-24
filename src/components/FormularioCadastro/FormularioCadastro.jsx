import React, { Component } from 'react';

class FormularioCadastro extends Component {
    state = {}
    render() {
        return (
            <form>
                <input type="text" placeholder="Título"></input>
                <textarea placeholder="Escreve sua nota..." />
                <button>Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;

