import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import toDoReducer from '../slices/ToDoSlice'
// import logger from 'redux-logger'
import { createLogger } from 'redux-logger'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { combineReducers } from 'redux'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['counter']
}
const rootReducer =  combineReducers({
    counter: counterReducer,
    toDo: toDoReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const logger = createLogger({
   level: 'warn',

    duration: true
});

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
}).concat(logger)
})

const persistor = persistStore(store)
export {persistor, store}