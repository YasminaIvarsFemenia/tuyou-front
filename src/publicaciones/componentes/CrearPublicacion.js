import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class CrearPublicacion extends Component {

    constructor() {
        super();
    }

    handlePublicar(e) {
        console.log(this.props.user.idUsuario, this.getText.value);
        this.props.publicar(this.props.user.idUsuario, this.getText.value);
        this.props.cerrarModal();
    }

    render() {
        return (
            <Modal show={true}>
                <Modal.Header closeButton onClick={(e) => this.props.cerrarModal(e)}>
                    <Modal.Title>Crear publicación</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                 
                    <textarea className="form-control" rows="5" ref={(input) => this.getText = input}/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.handlePublicar()}>
                        Publicar
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CrearPublicacion;