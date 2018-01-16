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
