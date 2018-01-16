import axios from "axios";

export const searchChangeAction = value => {
  return { type: "SEARCH_CHANGE", content: value };
};

export const loadArtistAction = value => {
  return { type: "LOAD_ARTISTS", content: value };
};
