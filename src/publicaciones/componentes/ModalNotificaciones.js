import React, { Component } from 'react'

class ModalNotificaciones extends Component {
    render() {
        return (
            <div>
                <div className="modal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Notificaciones:</h5>
                            </div>
                            <div className="modal-body">
                                <ul>
                                    <li>por cada notificacion </li>
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalNotificaciones;