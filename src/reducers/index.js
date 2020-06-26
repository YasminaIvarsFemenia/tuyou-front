import { combineReducers } from 'redux';
import { perfil } from '../publicaciones/reducers/profileReducer';
import { publicaciones } from '../publicaciones/reducers/publicacionReducer';
import { amigos } from '../publicaciones/reducers/friendsReducer';
import { user } from '../acceso/reducers/accessReducer';
import { busquedaAmigos } from '../publicaciones/reducers/genteReducer';

export default combineReducers({
    amigos,
    busquedaAmigos,
    perfil,
    user,
    publicaciones
});