import React, { Component } from 'react'

class Buscador extends Component {

    handleSearch(e) {
        this.props.onSearch(this.props.idUsuario, this.getText.value);
    }

    render() {
        return (
            <div>
                <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Busca en TuYou"
                    ref={(input) => this.getText = input}
                />
                <button
                    className="btn btn-light"
                    onClick={(e) => this.handleSearch(e)}
                >
                    Buscar
                </button>
            </div>
        )
    }
}
export default Buscador;