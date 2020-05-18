import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

// Reducers
import {bookListReducer} from '../../apps/Book/BookList';
import {bookDetailsReducer} from '../../apps/Book/BookDetails';
import {addBookReducer} from '../../apps/Book/AddBook';

export const rootReducer = combineReducers({
  bookList: bookListReducer,
  bookDetails: bookDetailsReducer,
  addBook: addBookReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
