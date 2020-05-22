import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

// Reducers
import {bookListReducer} from '../../apps/Book/BookList';
import {bookDetailsReducer} from '../../apps/Book/BookDetails';
import {addBookReducer} from '../../apps/Book/AddBook';
import {authReducer} from '../../apps/User/Login';
import {logOutReducer} from '../../apps/User/Logout';

export const rootReducer = combineReducers({
  bookList: bookListReducer,
  bookDetails: bookDetailsReducer,
  addBook: addBookReducer,
  auth: authReducer,
  logout: logOutReducer,
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
