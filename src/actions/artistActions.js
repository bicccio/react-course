import axios from "axios";

export const searchChangeAction = value => {
  return { type: "SEARCH_CHANGE", content: value };
};

export const loadArtistAction = artist => {
  return function(dispatch) {
    axios.get(`https://musicbrainz.org/ws/2/artist/?query="${artist}"&fmt=json`).then(res => {
      dispatch({ type: "LOAD_ARTISTS", content: res.data.artists });
    });
  };
};

export const loadArtistProfileAction = artist_key => {
  return function(dispatch) {
    axios.get(`https://musicbrainz.org/ws/2/artist/${artist_key}?inc=url-rels`).then(res => {
      dispatch({ type: "LOAD_ARTIST_PROFILE", content: res.data });
    });
  };
};

export const removeArtistAction = index => {
  return { type: "REMOVE_ARTIST", content: index };
};
