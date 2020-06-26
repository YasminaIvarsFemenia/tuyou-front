import * as types from "../acciones/types";
import * as typesAcceso from "../../acceso/acciones/types";

export const perfil = (state = [], action) => {
    switch (action.type) {
        case types.PROFILE_SUCCESS:
        case types.PROFILE_UPDATE_SUCCESS:
            return { ...state, ...action.payload };
        case typesAcceso.LOGOFF:
            return [];
        default:
            return state;
    }
}


const getModuleState = state => state.perfil;

export const getPerfil = state => getModuleState(state);