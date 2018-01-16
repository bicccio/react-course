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
      console.log(action.content);
      return action.content.slice(0);
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
