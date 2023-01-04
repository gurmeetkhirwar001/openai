import * as ActionTypes from "../actionType/useractionType";

export default function Userreducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.REGISTER_USER:
      return { ...state, user: action.payload.message };

    case ActionTypes.LOGIN_USER:
      return { ...state, user: action.payload.message };
    default:
      return state;
  }
}
