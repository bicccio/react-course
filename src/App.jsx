import React from "react";

var listDay1 = React.createElement(
  "li",
  {},
  React.createElement("h2", {}, "Giorno 1"),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      React.createElement("a", { target: "blank", href: "https://reactjs.org/" }, "React")
    )
  )
);

var listDay2 = React.createElement(
  "li",
  {},
  React.createElement("h2", {}, "Giorno 2"),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      React.createElement("a", { target: "blank", href: "https://redux.js.org/" }, "Redux")
    )
  )
);

var App = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    {
      style: { background: "#efefef", padding: "10px" },
      onClick: function() {
        alert("Benvenuti!");
      }
    },
    "Corso React"
  ),
  React.createElement("ul", {}, listDay1, listDay2)
);

export default App;
