import React from "react";
import axios from "axios";
import Artist from "./Artist.jsx";

class ArtistSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      error: ""
    };
  }

  componentDidMount = () => {
    axios
      .get('https://musicbrainz.org/ws/2/artist/?query="the cure"&fmt=json')
      .then(res => {
        this.setState({ artists: res.data.artists });
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.store.getState() !== nextProps.store.getState()) return false;
    return true;
  };

  onSearch() {
    axios
      .get('https://musicbrainz.org/ws/2/artist/?query="' + this.props.store.getState() + '"&fmt=json')
      .then(res => {
        this.setState({ artists: res.data.artists });
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  }

  handleSearchChange = e => {
    this.props.store.dispatch({ type: "SEARCH_CHANGE", content: e.target.value });
  };

  render() {
    const { artists } = this.state;
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
          {artists.map(artist => {
            return <Artist artist={artist} />;
          })}
        </div>
      </div>
    );
  }
}

export default ArtistSearch;
