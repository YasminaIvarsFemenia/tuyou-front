import * as types from "../acciones/types";
import * as typesAcceso from "../../acceso/acciones/types";

export const busquedaAmigos = (state = [], action) => {
    switch (action.type) {
        case types.SEARCH_PEOPLE_SUCCESS:
            return action.payload;
        case typesAcceso.LOGOFF:
            return [];
        default:
            return state;
    }
}

const getModuleState = state => state.busquedaAmigos;

export const getBusquedaAmigos = state => getModuleState(state);