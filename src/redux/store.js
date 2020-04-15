import { createStore, applyMiddleware } from "redux";
//Sayfayı yenilediğimizde alışveriş listemiz siliniyordu. Bunun için window.localStorage kullanacağız.
//redux-persist kütüphanesini onun için ekledik.
import { persistStore } from "redux-persist";
//Middleware Action ile Root Reducer Arasındadır
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
