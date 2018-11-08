// State argument is NOT application state
// only the state THIS reducers fucks with
// set initial state to null always
export default function(state = null, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }
  return state;
}
