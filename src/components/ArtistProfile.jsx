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

  buildLink = () => {
    const profile = [];
    if (this.props.artistProfile.relations) {
      this.props.artistProfile.relations.map(relation => {
        if (relation["target-type"] === "url") {
          profile.push(
            <div>
              <a target="blank" href={relation.url.resource}>
                {relation.type}
              </a>
            </div>
          );
        }
      });
    } else {
      return <span />;
    }
    return profile;
  };

  render() {
    const { artistProfile } = this.props;
    return (
      <div className="container">
        <h1>{artistProfile.name}</h1>
        <h4>Links</h4>
        <div>{this.buildLink()}</div>
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
