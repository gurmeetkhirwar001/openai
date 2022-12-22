import * as playground from "../actionType/useractionType";
// import   UserApi from "../../services/user";

export const Playground = (params) => async (dispatch) => {
  const res = await UserApi.SignIn(params);
  dispatch({
    type: Playground.AI_RESPONSE,
    payload: res.data,
  });
  return res.data;
};

