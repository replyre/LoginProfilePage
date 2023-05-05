import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userRed from "./features/User";
import BackColor from "./features/BackColor";

const store = configureStore({
  reducer: {
    user: userRed,
    bgColor: BackColor,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
