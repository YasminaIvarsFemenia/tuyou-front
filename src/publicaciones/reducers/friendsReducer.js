import * as types from "../acciones/types";
import * as typesAcceso from "../../acceso/acciones/types";

export const amigos = (state = [], action) => {
    switch (action.type) {
        case types.FRIENDS_SUCCESS:
        case types.FRIENDSHIP_ACCEPT_SUCCESS:
        case types.FRIENDSHIP_SUCCESS:
            return action.payload ;
        case typesAcceso.LOGOFF:
            return [];
        default:
            return state;
    }
}


const getModuleState = state => state.amigos;

export const getAmigos = state => getModuleState(state);