import * as types from "../acciones/types";

export const user = (state = {}, action) => {

    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return { ...state, ...action.payload };
        case types.REGISTER_SUCCESS:
            return { ...state, ...action.payload };
        case types.LOGOFF:
            return {};
        default:
            return state;
    }
};

const getModuleState = state => state.user;

export const getUser = state => getModuleState(state);