import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countSlice from './features/countSlice';
// 持久化
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducer = combineReducers({
  countSlice
});

const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, reducer);

const reduxStore = configureStore({
  reducer: persistedReducer,
  devTools: true // 默认true
});

// create persist store
export const persistor = persistStore(reduxStore);

export default reduxStore;
