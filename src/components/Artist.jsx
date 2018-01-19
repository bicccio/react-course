import React from "react";

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { background: "#fff", color: "#000" }
    };
  }

  componentDidMount = () => {
    if (this.props.artist.gender === "male") {
      this.setState({ style: { background: "#99ccff", color: "#fff" } });
    }

    if (this.props.artist.gender === "female") {
      this.setState({ style: { background: "#ff99cc", color: "#fff" } });
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.artist.gender === "male") {
      this.setState({ style: { background: "#99ccff", color: "#fff" } });
    } else if (nextProps.artist.gender === "female") {
      this.setState({ style: { background: "#ff99cc", color: "#fff" } });
    } else {
      this.state = {
        style: { background: "#fff", color: "#000" }
      };
    }
  };

  compileList = artist => {
    let list = [];
    if (artist.gender) {
      list.push(<li>{artist.gender}</li>);
    }
    if (artist.tags && artist.tags[0]) {
      list.push(<li>{artist.tags[0].name}</li>);
    }
    if (artist.area && artist.area.name) {
      list.push(<li>{artist.area.name}</li>);
    }
    if (artist.disambiguation) {
      list.push(<li>{artist.disambiguation}</li>);
    }
    if (artist.type) {
      list.push(<li>{artist.type}</li>);
    }

    return list;
  };

  delete = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.delete(this.props.i);
  };

  render() {
    const { artist } = this.props;
    let genre = "";
    let gender = "";
    let area = "";
    var style = Object.assign(
      {
        padding: "10px",
        border: "1px solid #ededed",
        margin: "10px",
        background: this.state.background
      },
      this.state.style
    );

    const list = this.compileList(artist);

    return (
      <div className="col-xs-3" style={style}>
        <h4>{artist.name}</h4>
        <ul>{list}</ul>
        <a href="#" onClick={e => this.delete(e)}>
          delete
        </a>
      </div>
    );
  }
}

export default Artist;
