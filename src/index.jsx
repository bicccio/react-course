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
import App from "./App.jsx";
import artistReducers from "./reducers/artistReducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

const store = createStore(artistReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("react-root")
);
