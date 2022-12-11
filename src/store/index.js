import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './reducers/auth';
import notesReducer from './reducers/notes';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)
const persistedReducer2 = persistReducer(persistConfig, notesReducer)

const reducers = combineReducers({
    auth : persistedReducer,
    notes:persistedReducer2
})

export const store= configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools :true
})

export const persistor = persistStore(store)
