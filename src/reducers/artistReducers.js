const artistSearch = (state = "", action) => {
  switch (action.type) {
    case "SEARCH_APPEND":
      return state + action.content;
    case "SEARCH_REMOVE":
      return state.substring(0, state.length - 1);
    default:
      return state;
  }
};

import { createStore } from "redux";
const store = createStore(artistSearch);
console.log("state: ", store.getState());

store.subscribe(() => {
  console.log("state: ", store.getState());
});

store.dispatch({ type: "SEARCH_APPEND", content: "a" });
store.dispatch({ type: "SEARCH_APPEND", content: "b" });
store.dispatch({ type: "SEARCH_APPEND", content: "c" });
store.dispatch({ type: "SEARCH_REMOVE" });

store.subscribe(() => {
  console.log("state: ", store.getState());
});

export default artistSearch;
