import { combineReducers } from "@reduxjs/toolkit";
import Userreducer from "./reducers/user";
import Openaireducer from "./reducers/playground";
import PaymentReducer from "./reducers/payment";
const rootReducer = combineReducers({
  user: Userreducer,
  openai: Openaireducer,
  payment: PaymentReducer,
});

export default rootReducer;
