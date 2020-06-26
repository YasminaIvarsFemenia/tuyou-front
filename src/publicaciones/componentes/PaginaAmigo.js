import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getPerfil } from '../reducers/profileReducer';
import { getUser } from '../../acceso/reducers/accessReducer'
import { editProfile } from '../acciones/creators';
import { getAmigos } from '../reducers/friendsReducer';
import { Link, Redirect } from 'react-router-dom';
import { logoff } from '../../acceso/acciones/creators'

class PaginaAmigo extends Component {
    constructor() {
        super();
    }

    render() {

        const amigo = this.props.amigos.find(a => a.idUsuario === Number(this.props.match.params.id));

        return (
            <div>
                {
                    !this.props.user.idUsuario && <Redirect to="/" />
                }
                <Row>
                    <Col sm={3}>
                        <div>
                            <a href="#"><i class="far fa-smile-wink fa-4x"></i>
                                <Link to="/profile">
                                    {this.props.perfil.nombre} {this.props.perfil.apellidos}
                                </Link>
                            </a>

                        </div>
                    </Col>

                    <Col sm={{ span: 3, offset: 6 }}>
                        <button className="btn btn-light" onClick={() => this.props.logoff()}>Cerrar Sesión</button>
                    </Col>

                </Row>
                <Row>
                    <Col sm={{ span: 6, offset: 3 }}>
                        <div className="jumbotron">
                            <Row>
                                <Col sm={{ span: 8, offset: 3 }}>
                                    <i className="fas fa-user-circle fa-3x">Perfil</i>
                                </Col>
                            </Row>

                            {
                                amigo &&
                                <Row>
                                    <div>
                                        <strong>Nombre:</strong>
                                        <p>{amigo.nombre}</p>
                                        <strong>Apellidos</strong>
                                        <p>{amigo.apellidos}</p>
                                        <strong>Estudios:</strong>
                                        <p>{amigo.estudios}</p>
                                        <strong>Lugar de nacimiento:</strong>
                                        <p>{amigo.lugarNacimiento}</p>
                                    </div>
                                </Row>
                            }

                            <Row>

                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    perfil: getPerfil(state),
    amigos: getAmigos(state),
    user: getUser(state)
});


const mapDispatchToProps = {
    editProfile,
    logoff
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginaAmigo);