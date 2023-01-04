import { combineReducers } from "@reduxjs/toolkit";
import Userreducer from "./reducers/user";
import Openaireducer from "./reducers/playground";
const rootReducer = combineReducers({
  user: Userreducer,
  openai: Openaireducer,
});

export default rootReducer;
