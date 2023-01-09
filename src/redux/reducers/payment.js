/* eslint-disable import/no-anonymous-default-export */
import * as PaymentActionTypes from "../actionType/paymentActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case PaymentActionTypes.CREATE_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};
