// Application entrypoint.

// Load up the application styles
global.jQuery = require("jquery");
require("bootstrap");
require("bootstrap/dist/css/bootstrap.css");
require("../styles/home.css");

// Render the top-level React component
import React from "react";
import ReactDOM from "react-dom";
import ArtistSearch from "./App.jsx";
import artistSearch from "./reducers/artistReducers";

ReactDOM.render(<ArtistSearch />, document.getElementById("react-root"));
