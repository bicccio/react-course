const artistSearch = (state = "", action) => {
  switch (action.type) {
    case "SEARCH_CHANGE":
      return action.content;
    default:
      return state;
  }
};

export default artistSearch;
