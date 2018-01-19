import React from "react";
import axios from "axios";
import Artist from "./Artist.jsx";
import * as artistActions from "../actions/artistActions.js";
import { bindActionCreators } from "redux";

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
    this.props.handleSearchChange(e.target.value);
  };

  render() {
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
            artists.map((artist, index) => {
              return <Artist i={index} delete={this.props.handleRemove} artist={artist} />;
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
    handleSearchChange: bindActionCreators(artistActions.searchChangeAction, dispatch),
    handleSearch: bindActionCreators(artistActions.loadArtistAction, dispatch),
    handleRemove: bindActionCreators(artistActions.removeArtistAction, dispatch)
  };
}

import { connect } from "react-redux";

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSearch);
