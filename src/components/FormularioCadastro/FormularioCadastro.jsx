import React, { Component } from 'react';
import './estilo.css';

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem Categoria";
    }

    _criarNota(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }

    _handleMudancaCategoria(event) {
        event.stopPropagation();
        this.categoria = event.target.value;
    }

    _handleMudancaTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handleMudancaTexto(event) {
        event.stopPropagation();
        this.texto = event.target.value;
    }

    render() {
        return (
            <form
                className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <select className="form-cadastro_input"
                    onChange={this._handleMudancaCategoria.bind(this)}>
                    <option>Sem Categoria</option>

                    {this.props.categorias.map((categoria) => {
                        return <option>{categoria}</option>
                    })}
                </select>
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreve sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;

