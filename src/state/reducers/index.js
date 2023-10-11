import {combineReducers} from "redux";
import postReducer from "./postReducer";

const reducers = combineReducers({
    product:postReducer
});

export default reducers