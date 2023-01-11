import * as User from "../actionType/useractionType";
import   UserApi from "../../services/user";

export const UserSignUp = (params) => async (dispatch) => {
  const res = await UserApi.SignIn(params);
  dispatch({
    type: User.REGISTER_USER,
    payload: res.data,
  });
  return res.data;
};

export const UserLogin = (params) => async (dispatch) => {
  const res = await UserApi.LogIn (params);
  dispatch({
    type: User.LOGIN_USER,
    payload: res.data,
  });
  return res.data;
};
export const GetUser = () => async (dispatch) => {
  const res = await UserApi.getCurrentuser();
  dispatch({
    type: User.GET_USER,
    payload: res.data,
  });
  return res.data;
};
export const UpdateUser = (params) => async (dispatch) => {
  const res = await UserApi.updateProfile(params, params._id);
  dispatch({
    type: User.UPDATE_USER,
    payload: res.data,
  });
  return res.data;
};
export const UpdatePassword = (params) => async (dispatch) => {
  console.log(params);
  const res = await UserApi.updatePassword(params, params._id);
  dispatch({
    type: User.UPDATE_PASSWORD,
    payload: res.data,
  });
  return res.data;
};

// export const VerifyUser = (params) => async (dispatch) => {
//   const res = await UserApi.verifyMail(params);
//   dispatch({
//     type: User.VERIFY_USER,
//     payload: res.data,
//   });
//   return res.data;
// };

export const getUserList = (params) => async (dispatch) => {
  const res = await UserApi.getUserList(params);

  dispatch({
    type: User.GET_USER_LIST,
    payload: res.data,
  });
  return res.data;
};