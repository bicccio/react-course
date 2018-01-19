const artistSearch = (state = "", action) => {
  switch (action.type) {
    case "SEARCH_CHANGE":
      return action.content;
    default:
      return state;
  }
};

const artistList = (state = [], action) => {
  switch (action.type) {
    case "LOAD_ARTISTS":
      return action.content.slice(0);
    case "REMOVE_ARTIST":
      return [...state.slice(0, action.content), ...state.slice(action.content + 1, state.length)];
    default:
      return state;
  }
};

import { combineReducers } from "redux";

const artistReducers = combineReducers({
  search: artistSearch,
  artists: artistList
});

export default artistReducers;
