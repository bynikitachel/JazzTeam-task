import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth'
import notesReducer from './reducers/notes'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)
const persistedNotesReducer = persistReducer(persistConfig, notesReducer)

const reducer = combineReducers({
  auth: persistedAuthReducer,
  notes: persistedNotesReducer,
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
})

export const persistor = persistStore(store)
