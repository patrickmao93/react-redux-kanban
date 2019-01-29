import React from "react";
import ReactDOM from "react-dom";

import "styles/index.css";

import initialState from "initialState";
import Root from "Root";
import App from "components/App";

ReactDOM.render(
  <Root initialState={initialState}>
    <App />
  </Root>,
  document.getElementById("root")
);
