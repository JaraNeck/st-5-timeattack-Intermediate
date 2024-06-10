// TODO: store 셋업하고 slice에서 import한 reducer를 할당하세요.
import { combineReducers, createStore } from "redux";
import todos from "../slices/todoSlice";

const rootReducer = combineReducers({
  todos: todos,
});

const store = createStore(rootReducer);

export default store;
