import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Amigos extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="primary">

                <div>
                        <button className="btn btn-outline-primary">
                            <Link to={"/profile/"+this.props.idUsuario}>
                                {this.props.nombre} {this.props.apellidos}
                            </Link>
                        </button>
                    </div>
            </div>
        );
    }
}

export default Amigos;