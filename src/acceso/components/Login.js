import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class Login extends Component {

    handleLogin() {
        const email = this.getEmail.value;
        const password = this.getPassword.value;
        this.props.tryLogin({ mail: email, pwd: password});
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <form>
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
                            <button type="button" onClick={() => this.handleLogin()} className="btn btn-outline-info">Entrar</button>
                        </form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Login;