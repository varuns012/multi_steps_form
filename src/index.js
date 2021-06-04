import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import formReducers from "./redux/reducer/formReducer";

const store = createStore(formReducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <>
      <App />
    </>
  </Provider>,
  document.getElementById("root")
);
