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
    if (this.props.search !== nextProps.search) return false;
    return true;
  };

  onSearch() {
    this.searchForArtist(this.props.search);
  }

  searchForArtist = artist => {
    this.props.handleSearch(artist);
  };

  handleSearchChange = e => {
    this.props.handleSearchChange(e);
  };

  render() {
    console.log(this.props);
    const { artists } = this.props;
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

function mapStateToProps(state) {
  return {
    search: state.search,
    artists: state.artists
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSearchChange: e => {
      dispatch({ type: "SEARCH_CHANGE", content: e.target.value });
    },
    handleSearch: artist => {
      axios.get(`https://musicbrainz.org/ws/2/artist/?query="${artist}"&fmt=json`).then(res => {
        dispatch({ type: "LOAD_ARTISTS", content: res.data.artists });
      });
    }
  };
}

import { connect } from "react-redux";

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSearch);
