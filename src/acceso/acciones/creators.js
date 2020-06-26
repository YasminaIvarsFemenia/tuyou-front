import * as types from "./types";
import { tryLogin, register } from "../api";

const sendLoginRequest = () => ({
  type: types.LOGIN_REQUEST,
});
const sendLoginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user
});
const sendLoginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});

export const sendLogin = (userRegister) => (dispatch) => {
  dispatch(sendLoginRequest());
  tryLogin(
    userRegister,
    (user) => {
      dispatch(sendLoginSuccess(user));
    },
    (err) => {
      dispatch(sendLoginFailure(err));
    });
};

const sendRegisterRequest = () => ({
  type: types.REGISTER_REQUEST,
});
const sendRegisterSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user
});
const sendRegisterFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});

export const sendRegister = (userLogin) => (dispatch) => {
  dispatch(sendRegisterRequest());
  register(
    userLogin,
    (user) => {
      dispatch(sendRegisterSuccess(user));
    },
    (err) => {
      dispatch(sendRegisterFailure(err));
    });
};

export const logoff = (dispatch) => ({
  type: types.LOGOFF,
});


