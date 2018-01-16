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

let state = artistSearch("", { type: "SEARCH_APPEND", content: "a" });
console.log(state);

state = artistSearch(state, { type: "SEARCH_APPEND", content: "b" });
console.log(state);

state = artistSearch(state, { type: "SEARCH_APPEND", content: "c" });
console.log(state);

state = artistSearch(state, { type: "SEARCH_REMOVE" });
console.log(state);

export default artistSearch;
