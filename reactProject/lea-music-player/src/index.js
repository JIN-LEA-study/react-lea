import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import mvPlayerReducer from "./store/mvPlayerList";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
const store = createStore(mvPlayerReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
