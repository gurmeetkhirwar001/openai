import * as PaymentServices from "../../services/payment";
import * as PaymentActionTypes from "../actionType/paymentActionType";

export const CreateOrder = (params) => async (dispatch) => {
  try {
    const reponse = await PaymentServices.CreateOrder(params);

    dispatch({
      type: PaymentActionTypes.CREATE_ORDER,
    });
    return reponse.data;
  } catch (e) {
    return e;
  }
  
};
export const VerifyOrder = (params) => async (dispatch) => {
  const reponse = await PaymentServices.VerifyOrder(params);
  dispatch({
    type: PaymentActionTypes.VERIFY_ORDER,
  });
  return reponse.data;
};
