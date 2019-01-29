import { ADD_TODO, MOVE_TODO } from "actions/types";

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const moveTodo = (id, dir) => {
  return {
    type: MOVE_TODO,
    payload: { id, dir }
  };
};
