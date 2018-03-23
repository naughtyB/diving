import {combineReducers} from "redux";
import homepage from "./homepage.js";
import practice from "./practice.js";
import user from './user.js';
import tripDetail from './tripDetail.js';
import trip from './trip.js';



export const reducer = combineReducers({
    homepage,
    practice,
    user,
    tripDetail,
    trip
});

export default reducer;