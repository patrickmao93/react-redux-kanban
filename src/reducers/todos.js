import { ADD_TODO, MOVE_TODO } from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case MOVE_TODO:
      const newState = state.slice(0);
      newState.find(todo => todo.id === action.payload.id).colId +=
        action.payload.dir;

      return newState;
    default:
      return state;
  }
};
