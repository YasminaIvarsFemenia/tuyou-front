import React, { Component } from 'react';

class BuscadorAmigos extends Component {

    handleOnChange(e){
        this.props.onFiltrarAmigos(e.target.value);
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Busca tus amigos"
                    className="form-control"
                    onChange={(e) => this.handleOnChange(e)}
                />
            </div>
        )
    }
}
export default BuscadorAmigos;