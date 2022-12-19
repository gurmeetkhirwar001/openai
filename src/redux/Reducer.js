import * as ActionTypes from "../redux/actionType/useractionType";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.REGISTER_USER:
      return { ...state, user: action.payload.message };

    case ActionTypes.LOGIN_USER:
      return { ...state, user: action.payload.message };
    default:
      return state;
  }
}
