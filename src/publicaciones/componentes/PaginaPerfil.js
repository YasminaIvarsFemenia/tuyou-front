import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getPerfil } from '../reducers/profileReducer';
import { getUser } from '../../acceso/reducers/accessReducer'
import { logoff } from '../../acceso/acciones/creators'
import { editProfile } from '../acciones/creators';
import { Link, Redirect } from 'react-router-dom';

class PaginaPerfil extends Component {
    constructor() {
        super();
        this.state = {
            option: 0
        }
    }

    handleForm(e) {
        e.preventDefault();
        const name = this.getName.value;
        const surname = this.getSurname.value;
        const studies = this.getStudies.value;
        const birthplace = this.getBirthplace.value;

        const perfil = {
            name,
            surname,
            studies,
            birthplace,
        }

        this.props.editProfile(this.props.user.idUsuario, perfil);
        this.setState({ option: 0 })
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
                        <div className="jumbotron">
                            <Row>
                                <Col sm={{ span: 8, offset: 3 }}>
                                    <i className="fas fa-user-circle fa-3x">Mi perfil</i>
                                </Col>
                            </Row>

                            {
                                this.state.option === 0 &&
                                <div>
                                    <strong>Nombre:</strong>
                                    <p>{this.props.perfil.nombre}</p>
                                    <strong>Apellidos</strong>
                                    <p>{this.props.perfil.apellidos}</p>
                                    <strong>Estudios:</strong>
                                    <p>{this.props.perfil.estudios}</p>
                                    <strong>Lugar de nacimiento:</strong>
                                    <p>{this.props.perfil.lugarNacimiento}</p>
                                    <strong>Email:</strong>
                                    <p>{this.props.user.email}</p>


                                </div>
                            }
                            {
                                this.state.option === 1 &&
                                <div>
                                    <form className="form">
                                        < div className="form-group">
                                            <label className="control-label" for="nombre">Nombre:</label>
                                            <input className="form-control" required type="text" ref={(input) => this.getName = input}
                                                defaultValue={this.props.perfil.nombre} />
                                        </div>
                                        < div className="form-group">
                                            <label className="control-label" for="apellidos">Apellidos:</label>
                                            <input className="form-control" required type="text" ref={(input) => this.getSurname = input}
                                                defaultValue={this.props.perfil.apellidos} />
                                        </div>
                                        < div className="form-group">
                                            <label className="control-label" for="studies">Estudios:</label>
                                            <input className="form-control" required type="text" ref={(input) => this.getStudies = input}
                                                defaultValue={this.props.perfil.estudios} />
                                        </div>
                                        < div className="form-group">
                                            <label className="control-label" for="birtplace">Lugar de nacimiento:</label>
                                            <input className="form-control" required type="text" ref={(input) => this.getBirthplace = input}
                                                defaultValue={this.props.perfil.lugarNacimiento} />
                                        </div>
                                        <button type="button"
                                            onClick={(e) => this.handleForm(e)}
                                            className="btn btn-primary">Guardar</button>
                                    </form>
                                </div>
                            }
                            <Row>
                                <Col sm={{ span: 6, offset: 8 }}>
                                    <button
                                        type="button"
                                        onClick={() => this.setState({ option: (this.state.option === 0 ? 1 : 0) })}
                                        className="btn btn-primary" >
                                        {
                                            this.state.option === 0 ? "Editar perfil" : "Cancelar"
                                        }
                                    </button>
                                </Col>
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
    user: getUser(state)
});


const mapDispatchToProps = {
    editProfile,
    logoff
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginaPerfil);