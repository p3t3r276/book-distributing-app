import {LoginActionType} from '../src/apps/User/Login';
import {BookListActionType} from '../src/apps/Book/BookList';
import {BookDetailsActionType} from '../src/apps/Book/BookDetails';
import {AddBookActionType} from '../src/apps/Book/AddBook';

export type AppAction =
  | BookListActionType
  | BookDetailsActionType
  | AddBookActionType
  | LoginActionType;
