import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import ArtistSearch from "./components/ArtistSearch.jsx";
import ArtistProfile from "./components/ArtistProfile.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ArtistSearch} />
          <Route exact path="/profile/:id" component={ArtistProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;
