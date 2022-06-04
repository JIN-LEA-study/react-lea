import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import musicPlayerReducer from "./store/musicPlayerReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(musicPlayerReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
