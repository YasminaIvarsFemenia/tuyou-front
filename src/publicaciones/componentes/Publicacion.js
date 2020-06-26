import React, { Component } from 'react'
import { Row, Col, Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { connect } from 'react-redux';
import { likeIt } from '../acciones/creators';
import { getUser } from '../../acceso/reducers/accessReducer'

class Publicacion extends Component {

    constructor() {
        super();
    }

    handleLike(idPublicacion) {
        this.props.likeIt(this.props.user.idUsuario, idPublicacion);
    }

    render() {
        return (
            <div className="card border-primary mb-3">
                <div className="card-header">
                    <Row>
                        <Col sm={9}>
                            <p>{this.props.nombre} {this.props.apellidos}</p>
                        </Col>
                        <Col sm={3}>
                            <p>{this.props.fecha}</p>
                        </Col>
                    </Row>
                </div>
                <div className="card-body">
                    <p className="card-text">{this.props.texto} </p>
                    <div>
                        <Row>
                            <Col sm={1}>
                                {
                                    this.props.showMegusta &&
                                    <i className="fas fa-heart btn btn-primary fa-1x" 
                                    onClick={() => this.handleLike(this.props.id)}></i>
                                }
                            </Col>
                            <Col sm={7}>
                            {
                                this.props.megusta && this.props.megusta.length > 0 &&
                                <OverlayTrigger
                                    trigger="click"
                                    placement="right"
                                    overlay={
                                        <Popover id="popover-basic">
                                            <Popover.Title as="h3">Amigos</Popover.Title>
                                            <Popover.Content>
                                                {
                                                    this.props.megusta.map((g,i) => 
                                                    (<span key={i}>{g.nombre} {g.apellidos}<br /></span>))
                                                }
                                                
                                        </Popover.Content>
                                        </Popover>
                                    }
                                >
                                    <Button variant="success">Ver Me gustas</Button>
                                </OverlayTrigger>
                            }
                            </Col>
                            {
                                this.props.delete &&
                                <Col sm={4}>
                                    <Button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => this.props.onDelete(this.props.id)}
                                    >
                                        Eliminar
                                    </Button>
                                </Col>
                            }
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = {
    likeIt
  };
  
  const mapStateToProps = state => ({
    user: getUser(state)
  });
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Publicacion);