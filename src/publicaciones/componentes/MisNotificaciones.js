import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getPerfil } from '../reducers/profileReducer';
import { getUser } from '../../acceso/reducers/accessReducer'
import { acceptFriendship } from '../acciones/creators';
import { Link, Redirect } from 'react-router-dom';
import { getAmigos } from '../reducers/friendsReducer';
import { logoff } from '../../acceso/acciones/creators';

class MisPublicaciones extends Component {
    constructor() {
        super();
    }

    handleAceptarSolicitud(idUsuarioPeticion, estado) {
        this.props.acceptFriendship(this.props.user.idUsuario, idUsuarioPeticion, estado);
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
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <Link to="/profile">Mi Perfil</Link>
                                        </a>

                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <Link to="/profile/publications">Mis publicaciones</Link>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <Link to="/profile/notifications">Mis notificaciones</Link>
                                        </a>
                                    </li>
                                </ul>

                                <button className="btn btn-light" onClick={() => this.props.logoff()}>Cerrar Sesión</button>

                            </div>
                        </nav>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ span: 6, offset: 3 }}>
                        <h3>Peticiones pendientes de aceptar</h3>
                        {
                            this.props.amigos && this.props.amigos
                                .filter(a => a.estado === 4)
                                .map((a) => (
                                    <Row>
                                        <Col>{a.nombre}</Col>
                                        <Col>{a.apellidos}</Col>

                                        <button className="btn btn-primary" onClick={() => this.handleAceptarSolicitud(a.idUsuario, 2)}>Aceptar solicitud</button>

                                    </Row>
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
    amigos: getAmigos(state)
});


const mapDispatchToProps = {
    acceptFriendship,
    logoff
};

export default connect(mapStateToProps, mapDispatchToProps)(MisPublicaciones);