import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import HeaderHome from './HeaderHome';
import AmigosHome from './AmigosHome';
import PublicacionesHome from './PublicacionesHome';
import BuscadorAmigos from './BuscadorAmigos';
import { getProfile, getPublications, getFriends, deletePublication } from '../acciones/creators';
import { getUser } from '../../acceso/reducers/accessReducer'
import { getAmigos } from '../reducers/friendsReducer';
import { getPerfil } from '../reducers/profileReducer';
import { getPublicaciones } from '../reducers/publicacionReducer';
import { Redirect } from 'react-router-dom';


class HomeUser extends Component {

  constructor() {
    super();
    this.state = {
      amigosFilter: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.amigos !== this.props.amigos) {
      this.setState({
        amigosFilter: nextProps.amigos,
      });
    }
  }

  componentDidMount() {
    this.props.getProfile(this.props.user.idUsuario);
    this.props.getPublications(this.props.user.idUsuario);
    this.props.getFriends(this.props.user.idUsuario);
  }

  filtrarAmigos(text) {
    this.setState({
      amigosFilter: this.props.amigos.filter(x => x.nombre.toLowerCase().indexOf(text.toLowerCase()) !== -1 || x.apellidos.toLowerCase().indexOf(text.toLowerCase()) !== -1)
    });
  }

  handleDelete(idPublicacion){
    this.props.deletePublication(this.props.user.idUsuario, idPublicacion);
  }

  render() {
    return (
      <div>
        {
          !this.props.user.idUsuario && <Redirect to="/" />
        }
        <Container fluid>
          <Row>
            <Col>
              <HeaderHome />
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <div className="jumbotron">
               <h4>Amigos</h4>
                <BuscadorAmigos onFiltrarAmigos={(text) => this.filtrarAmigos(text)} />
                <AmigosHome amigos={this.state.amigosFilter} />
              </div>
            </Col>
            <Col sm={6}>
              <PublicacionesHome
                publicaciones={this.props.publicaciones}
                user={this.props.user}
                onDelete={(idPublicacion) => this.handleDelete(idPublicacion)}
                />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getProfile,
  getPublications,
  getFriends,
  deletePublication
};

const mapStateToProps = state => ({
  user: getUser(state),
  perfil: getPerfil(state),
  publicaciones: getPublicaciones(state),
  amigos: getAmigos(state)
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeUser);