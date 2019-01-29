import { combineReducers } from "redux";

import todosReducer from "reducers/todos";
import columnsReducer from "reducers/columns";

export default combineReducers({
  columns: columnsReducer,
  todos: todosReducer
});
