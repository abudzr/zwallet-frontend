import reducerUser from "./user"
import { combineReducers } from "redux";
const reducers = {
    user: reducerUser,
};

export default combineReducers(reducers);