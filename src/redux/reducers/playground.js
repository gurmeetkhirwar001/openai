import * as PlayActionTypes from "../actionType/playgroundactionType";

export default function AIreducer(state = {}, action) {
  switch (action.type) {
    case PlayActionTypes.AI_RESPONSE:
      return { ...state, aireponse: action.payload.data };

    default:
      return state;
  }
}
