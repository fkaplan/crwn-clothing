import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['cart']
} 
//userReducer bilgimiz fireBasede tutuluyor ve sayfa yenilensede logout olana kadar gitmiyor.
//bu nedenle sadece cart bilgisi localStorage da tutacağız.

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer);