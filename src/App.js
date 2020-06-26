import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeUser from './publicaciones/componentes/HomeUser';
import PaginaAmigo from './publicaciones/componentes/PaginaAmigo';
import PaginaPerfil from './publicaciones/componentes/PaginaPerfil';
import MisPublicaciones from './publicaciones/componentes/MisPublicaciones';
import MisNotificaciones from './publicaciones/componentes/MisNotificaciones';
import Access from './acceso/components/Access';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Access} exact />
          <Route path='/home' component={HomeUser} exact />
          <Route path='/profile' component={PaginaPerfil} exact />
          <Route path='/profile/publications' component={MisPublicaciones} exact />
          <Route path='/profile/notifications' component={MisNotificaciones} exact />
          <Route name="friend" path='/profile/:id' component={PaginaAmigo} />
        </Switch>
      </BrowserRouter>

    );

  }
}


export default App;
