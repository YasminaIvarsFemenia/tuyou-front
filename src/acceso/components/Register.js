import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';


class Register extends Component {

    handleSubmit = (e) => {

        e.preventDefault();
        const name = this.getName.value;
        const surname = this.getSurname.value;
        const studies = this.getStudies.value;
        const birthday = this.getBirthday.value;
        const birthplace = this.getBirthplace.value;
        const email = this.getEmail.value;
        const password = this.getPassword.value;

        const perfil = {
            name,
            surname,
            studies,
            birthday,
            birthplace,
            email,
            password,
        }

        this.props.onRegister(perfil);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1>Registro</h1>
                        <form className="form">
                            < div className="form-group">
                                <label className="control-label" for="nombre">Nombre:</label>
                                <input className="form-control" required type="text" ref={(input) => this.getName = input}
                                    placeholder="Introduce tu nombre" />
                            </div>
                            < div className="form-group">
                                <label className="control-label" for="apellidos">Apellidos:</label>
                                <input className="form-control" required type="text" ref={(input) => this.getSurname = input}
                                    placeholder="Introduce tus apellidos" />
                            </div>
                            < div className="form-group">
                                <label className="control-label" for="studies">Estudios:</label>
                                <input className="form-control" required type="text" ref={(input) => this.getStudies = input}
                                    placeholder="Introduce tus estudios" />
                            </div>
                            < div className="form-group">
                                <label className="control-label" for="birthday">Fecha de nacimiento:</label>
                                <input className="form-control" required type="date" ref={(input) => this.getBirthday = input} />
                            </div>
                            < div className="form-group">
                                <label className="control-label" for="birtplace">Lugar de nacimiento:</label>
                                <input className="form-control" required type="text" ref={(input) => this.getBirthplace = input}
                                    placeholder="Introduce tu lugar de nacimiento" />
                            </div>
                            < div className="form-group">

                                <label className="control-label" for="Email">Email:</label>
                                <input className="form-control" required type="text" ref={(input) => this.getEmail = input}
                                    placeholder="Introduce el email" />

                            </div>
                            < div className="form-group">
                                <label className="control-label" for="password">Contraseña:</label>
                                <input className="form-control" required type="password" ref={(input) => this.getPassword = input}
                                    placeholder="Introduce una contraseña" />
                            </div>
                            <button type="button" onClick={(e) => this.handleSubmit(e)} className="btn btn-info">Registrar</button>
                        </form>
                    </Col>
                </Row>
            </div>

        );
    }
}


export default connect()(Register);



