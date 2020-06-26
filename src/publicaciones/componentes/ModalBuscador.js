import React, { Component } from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap';

class ModalBuscador extends Component {

    handleSolicitud(idUsuarioPeticion, estado) {
        this.props.envioSolicitud(this.props.user.idUsuario, idUsuarioPeticion, estado);
        this.props.cerrarModal();
    }

    handleAceptarSolicitud(idUsuarioPeticion, estado) {
        this.props.aceptarSolicitud(this.props.user.idUsuario, idUsuarioPeticion, estado);
        this.props.cerrarModal();
    }

    render() {
        return (
            <Modal show={true}>
                <Modal.Header closeButton onClick={(e) => this.props.cerrarModal(e)}>
                    <Modal.Title>Resultados</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                 {
                    this.props.resultados && this.props.resultados.map(r => (
                        <Row>
                            <Col>
                                {r.nombre}
                            </Col>
                            <Col>
                                {r.apellidos}
                            </Col>
                            <Col>
                                {r.estado === 0 && <Button onClick={() => this.handleSolicitud(r.idUsuario, 1)}>Enviar solicitud</Button>}
                                {r.estado === 1 && <span>Petición ya enviada</span>}
                                {r.estado === 2 && <span>Ya es tu amigo!</span>}
                                {r.estado === 3 && <Button onClick={() => this.handleSolicitud(r.idUsuario, 1)}>Enviar solicitud</Button>}
                                {r.estado === 4 && <Button onClick={() => this.handleAceptarSolicitud(r.idUsuario, 2)}>Aceptar solicitud</Button>}
                            </Col>
                        </Row>
                    ))
                 }
                 {
                     !this.props.resultados && "No hay resultados"
                 }
                </Modal.Body>
            </Modal>
        )
    }
}
export default ModalBuscador;