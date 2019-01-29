import React from "react";
import { connect } from "react-redux";

import Column from "components/Column";

const App = props => {
  const columns = props.columns.map(column => (
    <Column key={column.id} name={column.name} id={column.id} />
  ));

  return <div className="app">{columns}</div>;
};

const mapStateToProps = state => {
  return {
    columns: state.columns
  };
};

export default connect(mapStateToProps)(App);
