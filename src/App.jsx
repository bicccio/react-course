import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      link: "",
      day: "1",
      visible: false
    };
  }

  handleLabelChange = e => {
    this.setState({ label: e.target.value });
  };

  handleLinkChange = e => {
    this.setState({ link: e.target.value });
  };

  selectDay = e => {
    this.setState({ day: e.target.value });
  };

  addItem = () => {
    this.props.addItem(this.state.label, this.state.link, this.state.day);
  };

  toggleForm = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <h4 style={{ marginRight: "10px" }}>Add item</h4>
              <button className="btn btn-info" onClick={e => this.toggleForm(e)}>
                {this.state.visible ? "Close" : "Edit"}
              </button>
            </div>
            {this.state.visible && (
              <div>
                <label>label</label>
                <input
                  style={{ marginBottom: "10px" }}
                  className="form-control"
                  type="text"
                  onChange={e => this.handleLabelChange(e)}
                />
                <label>link</label>
                <input
                  style={{ marginBottom: "10px" }}
                  className="form-control"
                  type="text"
                  onChange={e => this.handleLinkChange(e)}
                />
                <button style={{ marginBottom: "10px" }} onClick={this.addItem}>
                  Add
                </button>
                <div>
                  <label style={{ marginRight: "10px" }}>
                    <input onChange={e => this.selectDay(e)} name="day" type="radio" value="1" checked="true" />
                    day 1
                  </label>
                  <label>
                    <input onChange={e => this.selectDay(e)} name="day" type="radio" value="2" />
                    day 2
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

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
      <div className="container">
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
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        { title: "Giorno 1", items: [{ label: "React", link: "https://reactjs.org" }] },
        { title: "Giorno 2", items: [{ label: "Redux", link: "https://redux.js.org" }] }
      ]
    };
  }

  addItem = (label, link, day) => {
    const newElements = this.state.elements;
    newElements[day - 1].items.push({ label: label, link: link });
    this.setState({ elements: newElements });
  };

  render() {
    return (
      <div>
        <Title title="Corso React" />
        <Form addItem={this.addItem} />
        <List elements={this.state.elements} />
      </div>
    );
  }
}

export default App;
