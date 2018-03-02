import {combineReducers} from "redux";
import homepage from "./homepage.js";
import practice from "./practice.js";
import user from './user.js';



export const reducer = combineReducers({
    homepage,
    practice,
    user
});

export default reducer;