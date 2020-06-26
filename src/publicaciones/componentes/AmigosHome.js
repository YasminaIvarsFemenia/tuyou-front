import React, { Component } from 'react'
import Amigos from './Amigos';

class AmigosHome extends Component {

    render() {
        return (
            <div>
                {
                    this.props.amigos && this.props.amigos.filter(a => a.estado === 2)
                    .map((a, i) => (
                        <Amigos
                            key={i}
                            idUsuario={a.idUsuario}
                            nombre={a.nombre}
                            apellidos={a.apellidos}
                        />
                    ))
                }

            </div>
        );
    }
}

export default AmigosHome;