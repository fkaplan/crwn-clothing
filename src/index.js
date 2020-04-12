import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
//Redux provider ekleniyor. State bilgilerini bunun üzerinde tutacağız.
//Provider tüm diğer componentlerin parenti olmuş oldu.
import { Provider } from "react-redux";
import strore from './redux/store';

ReactDOM.render(
  <Provider store={strore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
