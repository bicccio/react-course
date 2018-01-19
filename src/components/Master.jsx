import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Artist Search</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
