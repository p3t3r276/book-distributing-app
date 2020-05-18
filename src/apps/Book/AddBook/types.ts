export const ADD_BOOK = '@BOOK/ADD_BOOK';
export const ADD_BOOK_SUCCESS = '@BOOK/ADD_BOOK_SUCCESS';
export const ADD_BOOK_FAIL = '@BOOK/ADD_BOOK_FAIL';

export interface AddBook {
  type: typeof ADD_BOOK;
}

export interface AddBookSuccess {
  type: typeof ADD_BOOK_SUCCESS;
}

export interface AddBookFail {
  type: typeof ADD_BOOK_FAIL;
  payload: string;
}

export type AddBookActionType = AddBook | AddBookSuccess | AddBookFail;

export type AddBookStateType = {
  loading: boolean;
  errorMessage: string;
};
