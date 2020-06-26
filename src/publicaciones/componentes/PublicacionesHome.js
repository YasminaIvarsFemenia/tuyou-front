import React, { Component } from 'react'
import Publicacion from './Publicacion';

class PublicacionesHome extends Component {
    
    mostrarMegusta(idUsuarioPublicador, megustas) {
        // si el usuario es el publicador no puede darle a me gusta
        if (this.props.user.idUsuario === idUsuarioPublicador) {
            return false;
        }
        // si el usuario existe en la lista de megustas, ya no puede darle otra vez
        if (megustas.map(m => m.idUsuario === this.props.user.idUsuario).length === 1) {
            return false
        }
        return true;
    }

    render() {
        return (
            <div>
                {
                    this.props.publicaciones.map((p) => (
                        <Publicacion
                            key={p.idPublicacion}
                            id={p.idPublicacion}
                            userId={p.idUsuario}
                            nombre={p.nombre}
                            apellidos={p.apellidos}
                            texto={p.texto}
                            fecha={p.fecha}
                            megusta={p.megusta}
                            showMegusta={this.mostrarMegusta(p.idUsuario, p.megusta)}
                            delete={p.idUsuario === this.props.user.idUsuario}
                            onDelete={(id) => this.props.onDelete(id)}
                        />
                    ))
                }
            </div>
        );
    }
}
export default PublicacionesHome;
