import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getPerfil } from '../reducers/profileReducer';
import { getUser } from '../../acceso/reducers/accessReducer'
import { logoff } from '../../acceso/acciones/creators'
import Publicacion from './Publicacion'
import { editProfile, deletePublication } from '../acciones/creators';
import { Link, Redirect } from 'react-router-dom';
import { getPublicaciones } from '../reducers/publicacionReducer';

class MisPublicaciones extends Component {
    constructor() {
        super();
    }

    handleDelete(idPublicacion) {
        this.props.deletePublication(this.props.user.idUsuario, idPublicacion);
    }

    render() {
        return (
            <div>
                {
                    !this.props.user.idUsuario && <Redirect to="/" />
                }
                <Row>
                    <Col sm={3}>
                        <div>
                            <a href="#"><i class="far fa-smile-wink fa-4x"></i>
                                <Link to="/home">
                                    {this.props.perfil.nombre} {this.props.perfil.apellidos}
                                </Link>
                            </a>
                        </div>
                    </Col>

                    <Col sm={9}>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">


                            <div className="collapse navbar-collapse" id="navbarColor01">

                                <ul className="navbar-nav mr-auto">
                                    <li className="btn btn-light">
                                        <a className="nav-link" href="#">
                                            <Link to="/profile">Mi Perfil</Link>
                                        </a>

                                    </li>
                                    <li className="btn btn-light">
                                        <a className="nav-link" href="#">
                                            <Link to="/profile/publications">Mis publicaciones</Link>
                                        </a>
                                    </li>

                                    <li className="btn btn-light">
                                        <Link to="/profile/notifications">Mis notificaciones</Link>
                                    </li>
                                </ul>


                                <button className="btn btn-light" onClick={() => this.props.logoff()}>Cerrar Sesión</button>

                            </div>



                        </nav>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ span: 6, offset: 3 }}>
                        {
                            this.props.publicaciones && this.props.publicaciones
                                .filter(p => p.idUsuario === this.props.user.idUsuario)
                                .map((p) => (
                                    <Publicacion
                                        key={p.idPublicacion}
                                        id={p.idPublicacion}
                                        userId={p.idUsuario}
                                        nombre={p.nombre}
                                        apellidos={p.apellidos}
                                        texto={p.texto}
                                        fecha={p.fecha}
                                        megusta={p.megusta}
                                        showMegusta={false}
                                        delete={true}
                                        onDelete={(id) => this.handleDelete(id)}
                                    />
                                ))
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    perfil: getPerfil(state),
    user: getUser(state),
    publicaciones: getPublicaciones(state)
});


const mapDispatchToProps = {
    editProfile,
    logoff,
    deletePublication
};

export default connect(mapStateToProps, mapDispatchToProps)(MisPublicaciones);