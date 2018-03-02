import {combineReducers} from "redux";
import homepage from "./homepage.js";
import practice from "./practice.js";
import userModal from './userModal.js';



export const reducer = combineReducers({
    homepage,
    practice,
    userModal
});

export default reducer;