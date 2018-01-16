// Application entrypoint.

// Load up the application styles
global.jQuery = require("jquery");
require("bootstrap");
require("bootstrap/dist/css/bootstrap.css");
require("../styles/home.css");

// Render the top-level React component
import React from "react";
import ReactDOM from "react-dom";
import ArtistSearch from "./components/ArtistSearch.jsx";
import artistReducers from "./reducers/artistReducers";
import { createStore } from "redux";

const store = createStore(artistReducers);

const render = () => {
  ReactDOM.render(<ArtistSearch />, document.getElementById("react-root"));
};

render();

store.subscribe(render);
