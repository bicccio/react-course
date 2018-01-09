import React from "react";

var elements = [
  { title: "Giorno 1", items: [{ label: "React", link: "https://reactjs.org/" }] },
  { title: "Giorno 2", items: [{ label: "Redux", link: "https://redux.js.org/" }] }
];

class ListElement extends React.Component {
  render() {
    const { title, items } = this.props;
    return (
      <li>
        <h2>{title}</h2>
        <ul>
          {items.map(item => {
            return (
              <li>
                <a href={item.link} target="_blank">
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }
}

class ListElements extends React.Component {
  render() {
    return (
      <div>
        {this.props.elements.map(element => {
          return <ListElement title={element.title} items={element.items} />;
        })}
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      <ul>
        <ListElements elements={this.props.elements} />
      </ul>
    );
  }
}

class Title extends React.Component {
  onTitleClick = () => {
    alert("benvenuti!");
  };

  render() {
    const titleStyle = { background: "#efefef", padding: "10px" };
    return (
      <h1 style={titleStyle} onClick={e => this.onTitleClick(e)}>
        {this.props.title}
      </h1>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Title title="Corso React" />
        <List elements={elements} />
      </div>
    );
  }
}

export default App;
