import React from "react";
import * as artistActions from "../actions/artistActions.js";
import { bindActionCreators } from "redux";

class ArtistProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.loadArtistProfileAction(this.props.match.params.id);
  };

  //componentWillReceiveProps = nextProps => {};

  render() {
    const { artistProfile } = this.props;

    return (
      <div className="col-xs-3">
        <h1>{artistProfile.name}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artistProfile: state.artistProfile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadArtistProfileAction: bindActionCreators(artistActions.loadArtistProfileAction, dispatch)
  };
}

import { connect } from "react-redux";

export default connect(mapStateToProps, mapDispatchToProps)(ArtistProfile);
