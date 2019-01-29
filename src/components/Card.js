import React from "react";
import { connect } from "react-redux";

import * as actions from "actions";

const Card = props => {
  return (
    <div className="card">
      <div
        className="card__arrow"
        onClick={() => props.moveTodo(props.todo.id, -1)}
      >
        <i className="fas fa-angle-left" />
      </div>
      <div className="card__content">{props.todo.content}</div>
      <div
        className="card__arrow"
        onClick={() => props.moveTodo(props.todo.id, 1)}
      >
        <i className="fas fa-angle-right" />
      </div>
    </div>
  );
};

export default connect(
  null,
  actions
)(Card);
