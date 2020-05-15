import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, {} as any);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
