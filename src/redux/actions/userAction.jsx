import * as User from "../actionTypes/userActionType";
import * as UserApi from "../../services/user";

export const UserSignUp = (params) => async (dispatch) => {
  const res = await UserApi.userRegister(params);
  dispatch({
    type: User.REGISTER_USER,
    payload: res.data,
  });
  return res.data;
};

export const UserLogin = (params) => async (dispatch) => {
  const res = await UserApi.login(params);
  dispatch({
    type: User.LOGIN_USER,
    payload: res.data,
  });
  return res.data;
};

export const VerifyUser = (params) => async (dispatch) => {
  const res = await UserApi.verifyMail(params);
  dispatch({
    type: User.VERIFY_USER,
    payload: res.data,
  });
  return res.data;
};

export const getUserList = (params) => async (dispatch) => {
  const res = await UserApi.getUserList(params);

  dispatch({
    type: User.GET_USER_LIST,
    payload: res.data,
  });
  return res.data;
};