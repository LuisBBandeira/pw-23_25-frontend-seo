import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore  } from "redux-persist";
import counterReducer from './CounterSlice'
import usersSlice from "./userSlice";
import loggerMiddleware from "./middleware";


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig,counterReducer);
const persistedUsersReducer = persistReducer(persistConfig, usersSlice);

export const store = configureStore({
    reducer: {
        counter: counterReducer, persistedReducer,
        users : persistedUsersReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
          },
        }).concat(loggerMiddleware),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);