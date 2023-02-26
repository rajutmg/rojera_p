import axios from "axios";
import axiosInstance from "../../helpers/axiosInstance";
import { AuthActionType } from "./actionType";

// register
export const registerRequest = () => {
  return {
    type: AuthActionType.REGISTER_REQUEST,
  };
};
export const registerSucess = (data) => {
  return {
    type: AuthActionType.REGISTER_SUCCESS,
    payload: data,
  };
};
export const registerFail = (errorMessage) => {
  return {
    type: AuthActionType.REGISTER_FAIL,
    payload: errorMessage,
  };
};

export const RegisterAuthAction = (userState, history) => {
  return async (dispatch) => {
    try {
      dispatch(registerRequest());
      const res = await axiosInstance().post("/auth/register", userState);
      const { data } = res;
      dispatch(registerSucess(data));
      history.push("/login");
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data);
        const errorMessage = error.response.data;
        dispatch(registerFail(errorMessage));
      }
    }
  };
};

// login
export const loginRequest = () => {
  return {
    type: AuthActionType.LOGIN_REQUEST,
  };
};
export const loginSucess = (data) => {
  return {
    type: AuthActionType.LOGIN_SUCESS,
    payload: data.user,
  };
};
export const loginFail = (errorMessage) => {
  return {
    type: AuthActionType.LOGIN_FAIL,
    payload: errorMessage,
  };
};

export const LoginAuthAction = (userState, history) => {
  return async (dispatch) => {
    try {
      dispatch(loginRequest());
      const res = await axiosInstance().post("/auth/login", userState);
      const { data } = res;
      dispatch(loginSucess(data));
      console.log(data);
      localStorage.setItem("auth_token", JSON.stringify(data));
      history.push("/");
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data);
        const errorMessage = error.response.data;
        dispatch(loginFail(errorMessage));
      }
    }
  };
};

// logout
export const logOut = () => {
  return {
    type: AuthActionType.LOGOUT,
  };
};

export const LogOutAuthAction = (history) => {
  return async (dispatch) => {
    dispatch(logOut());
    localStorage.removeItem("auth_token");
    history.push("/login");
  };
};
