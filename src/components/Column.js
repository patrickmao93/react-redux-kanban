import React from "react";
import { connect } from "react-redux";

import Card from "components/Card";
import * as actions from "actions";

const Column = props => {
  const cards = props.todos
    .filter(todo => todo.colId === props.id)
    .map(todo => <Card key={todo.id} todo={todo} />);

  const generateId = () => {
    return props.todos.reduce(
      (id, todo) => (todo.id >= id ? todo.id + 1 : id),
      0
    );
  };

  const addTodo = () => {
    const content = window.prompt("Add a todo");
    const todo = {
      id: generateId(),
      colId: props.id,
      content
    };
    props.addTodo(todo);
  };

  return (
    <div className="column">
      <div className={`column__name column__name--${props.name}`}>
        {props.name}
      </div>
      <div className="column__cards">{cards}</div>
      <div className="column__add" onClick={addTodo}>
        + Add a card
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  actions
)(Column);
