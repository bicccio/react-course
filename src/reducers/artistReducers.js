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
    default:
      return state;
  }
};

const artistProfile = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_ARTIST_PROFILE":
      return Object.assign({}, action.content);
    default:
      return state;
  }
};

import { combineReducers } from "redux";

const artistReducers = combineReducers({
  search: artistSearch,
  artists: artistList,
  artistProfile: artistProfile
});

export default artistReducers;
