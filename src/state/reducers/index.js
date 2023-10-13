import {combineReducers} from "redux";
import todoReducer from "./todoReducer";
import completedReducer from "./completedReducer";
import pendingReducer from "./pendingReducer";

const reducers = combineReducers({
    todoList:todoReducer,
    completedList:completedReducer,
    pendingList:pendingReducer
});

export default reducers