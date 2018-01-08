import React from "react";

var elements = [
  { title: "Giorno 1", items: [{ label: "React", link: "https://reactjs.org/" }] },
  { title: "Giorno 2", items: [{ label: "Redux", link: "https://redux.js.org/" }] }
];

class ListElement extends React.Component {
  render() {
    return React.createElement(
      "li",
      null,
      React.createElement("h2", null, this.props.title),
      React.createElement(
        "ul",
        null,
        this.props.items.map(item => {
          return React.createElement(
            "li",
            null,
            React.createElement("a", { target: "blank", href: item.link }, item.label)
          );
        })
      )
    );
  }
}

var listElements = elements.map(function(element) {
  return React.createElement(ListElement, { title: element.title, items: element.items });
});

var list = React.createElement("ul", null, listElements);

var titleStyle = { background: "#efefef", padding: "10px" };

var onTitleClick = function() {
  alert("benvenuti!");
};

var title = React.createElement("h1", { style: titleStyle, onClick: onTitleClick }, "Corso React");

var App = React.createElement("div", null, title, list);

export default App;
