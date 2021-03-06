// @flow

import React from "react";
import ReactDOM from "react-dom";
import "./styles.js";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root");
if (!root) {
  throw new Error("could not mount to root, #root not found");
}

ReactDOM.render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
