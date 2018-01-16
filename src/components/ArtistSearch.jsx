import React from "react";
import axios from "axios";
import Artist from "./Artist.jsx";

class ArtistSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // artists: [],
      error: ""
    };
  }

  componentDidMount = () => {
    this.searchForArtist("the cure");
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.store.getState().search !== nextProps.store.getState().search) return false;
    return true;
  };

  onSearch() {
    this.searchForArtist(this.props.store.getState().search);
  }

  searchForArtist = artist => {
    console.log(artist);
    axios
      .get(`https://musicbrainz.org/ws/2/artist/?query="${artist}"&fmt=json`)
      .then(res => {
        console.log(res.data.artists);
        this.props.store.dispatch({ type: "LOAD_ARTISTS", content: res.data.artists });
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  };

  handleSearchChange = e => {
    this.props.store.dispatch({ type: "SEARCH_CHANGE", content: e.target.value });
  };

  render() {
    const artists = this.props.store.getState().artists;
    return (
      <div className="container">
        <h1>Artist Search</h1>
        <div>
          <label>label</label>
          <input
            style={{ marginBottom: "10px" }}
            className="form-control"
            type="text"
            onChange={e => this.handleSearchChange(e)}
          />
        </div>
        <button className="btn btn-info" onClick={e => this.onSearch(e)}>
          Search
        </button>
        <div className="row">
          {artists &&
            artists.map(artist => {
              return <Artist artist={artist} />;
            })}
        </div>
      </div>
    );
  }
}

export default ArtistSearch;
