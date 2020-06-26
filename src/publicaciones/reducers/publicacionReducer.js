import * as types from "../acciones/types";
import * as typesAcceso from "../../acceso/acciones/types";

export const publicaciones = (state = [], action) => {
    switch (action.type) {
        case types.PUBLICATION_SUCCESS:
        case types.PUBLICATION_DELETE_SUCCESS:
        case types.LIKE_IT_SUCCESS:
            return action.payload;
        case types.PUBLICATION_NEW_SUCCESS:
            return [
                ...state, action.payload
            ];
        case typesAcceso.LOGOFF:
            return [];
        default:
            return state;
    }
}


const getModuleState = state => state.publicaciones;

export const getPublicaciones = state => getModuleState(state);