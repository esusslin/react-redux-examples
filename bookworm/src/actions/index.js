export function selectBook(book) {
  // selectBook is an ActionCreator, as such it needs to return an action.
  // an action is an object with a type property

  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}