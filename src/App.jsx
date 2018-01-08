import React from "react";

var elements = [
  { title: "Giorno 1", label: "React", link: "https://reactjs.org/" },
  { title: "Giorno 2", label: "Redux", link: "https://redux.js.org/" }
];

var listElement = function(element) {
  return React.createElement(
    "li",
    null,
    React.createElement("h2", null, element.title),
    React.createElement(
      "ul",
      null,
      React.createElement("li", null, React.createElement("a", { target: "blank", href: element.link }, element.label))
    )
  );
};

var listElements = elements.map(function(element) {
  return listElement(element);
});

var App = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    {
      style: { background: "#efefef", padding: "10px" },
      onClick: function() {
        alert("miao");
      }
    },
    "Corso React"
  ),
  React.createElement("ul", null, listElements)
);

export default App;
