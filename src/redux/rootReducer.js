import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import authErrorReducer from "./reducers/authErrorReducer";
import contactsReducer from "../redux/reducers/contactsReducer";
export const rootReducer = combineReducers({
  authState: authReducer,
  authError: authErrorReducer,
  contacts: contactsReducer,
});
