import React, { Component } from 'react';
import { connect } from 'react-redux';
import Register from './Register';
import Login from './Login';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { sendLogin, sendRegister } from '../acciones/creators';
import { getUser } from '../reducers/accessReducer';
import { Redirect } from 'react-router-dom';

class Access extends Component {

    constructor() {
        super();
        this.state = {
            option: 0,
        };
    }

    render() {
        return (
            <div>
                {
                    this.props.user.idUsuario && <Redirect to="/home" />
                }
                <Container fluid>
                    <Row>
                    <i class="far fa-smile-wink fa-4x">  TuYou</i>
                     
                    </Row>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Row>
                                <Col md={{ offset: 2}}>
                                    <Button onClick={() => this.setState({ option: 1 })}>Soy usuario</Button>
                                </Col>
                                <Col md={{ offset: 1}}>
                                    <Button onClick={() => this.setState({ option: 2 })}>Quiero registrarme</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {
                        this.state.option === 1 && <Login tryLogin={(user) => this.props.sendLogin(user)} />
                    }
                    {
                        this.state.option === 2 && <Register onRegister={(user) => this.props.sendRegister(user)}/>
                    }
                </Container>
            </div>
        );
    }
}

const mapDispatchToProps = {
    sendLogin,
    sendRegister,
};

const mapStateToProps = state => ({
    user: getUser(state),
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(Access);



