import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
//Redux provider ekleniyor. State bilgilerini bunun üzerinde tutacağız.
//Provider tüm diğer componentlerin parenti olmuş oldu.
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

//PersistGate'i ve persistor'ı sayfanın refreshlenmesi durumunda dataları kaybetmemek için ekliyoruz.
//localstorage kullanıyoruz.

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
