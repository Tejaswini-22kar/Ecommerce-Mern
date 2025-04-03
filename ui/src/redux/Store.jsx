import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import cartReducer from './CartSlice';
import productReducer from './ProductSlice'; // ✅ Import product reducer

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"], // 🔥 Persist only the cart
};

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer, // ✅ Add product reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export default store; // ✅ Default export
