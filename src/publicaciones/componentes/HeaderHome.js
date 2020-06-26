import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CrearPublicacion from './CrearPublicacion'
import { logoff } from '../../acceso/acciones/creators';
import Buscador from './Buscador'
import { createPublication } from '../acciones/creators';
import { getUser } from '../../acceso/reducers/accessReducer';
import { searchPeople, sendFriendship, acceptFriendship } from '../acciones/creators';
import { getBusquedaAmigos } from '../reducers/genteReducer';
import ModalBuscador from './ModalBuscador';

class HeaderHome extends Component {

    constructor() {
        super();
        this.state = {
            modal: 0,
            modalAmigos: 0
        }
    }

    onSearch(idUsuario, text) {
        this.props.searchPeople(idUsuario, text);
        this.setState({ modalAmigos: 1 })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm={3}>

                        <Buscador
                            idUsuario={this.props.user.idUsuario}
                            onSearch={(idUsuario, text) => this.onSearch(idUsuario, text)}
                        />
                    </Col>
                    <Col sm={6}>
                        <button
                            type="button"
                            className="btn btn-primary btn-lg btn-block"
                            onClick={() => this.setState({ modal: 1 })} >Publicar
                        </button>
                    </Col>
                    <Col sm={3}>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                            <div className="collapse navbar-collapse" id="navbarColor01">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="btn btn-light" href="#">
                                            <Link to="/profile">Mi Perfil</Link>
                                        </a>
                                    </li>
                                </ul>
                                <button
                                    class="btn btn-light"
                                    type="submit"
                                    onClick={() => this.props.logoff()}
                                >
                                    Cerrar Sesión
                                </button>
                            </div>
                        </nav>
                    </Col>
                </Row>
                {
                    this.state.modal == 1 &&
                    <CrearPublicacion
                        cerrarModal={() => this.setState({ modal: 0 })}
                        publicar={(idUsuario, text) => this.props.createPublication(idUsuario, text)}
                        user={this.props.user}
                    />
                }
                {
                    this.state.modalAmigos == 1 &&
                    <ModalBuscador
                        cerrarModal={() => this.setState({ modalAmigos: 0 })}
                        envioSolicitud={(idRequester, idTo, estado) => this.props.sendFriendship(idRequester, idTo, estado)}
                        aceptarSolicitud={(idRequester, idTo, estado) => this.props.acceptFriendship(idRequester, idTo, estado)}
                        resultados={this.props.busquedaAmigos}
                        user={this.props.user}
                    />
                }
            </div>
        );
    }
}

const mapDispatchToProps = {
    logoff,
    createPublication,
    searchPeople,
    sendFriendship,
    acceptFriendship
};

const mapStateToProps = state => ({
    user: getUser(state),
    busquedaAmigos: getBusquedaAmigos(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHome);