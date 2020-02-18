import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const welcome = "Welcome to my first React app!";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    console.log("did mount");
  }

  state = {
    toggle: true
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">
            Edit{" "}
            <a className="app-link" href="./App.js" rel="noopener noreferrer">
              src/App.js
            </a>{" "}
            and save to reload.
          </p>
          <Welcome text={welcome} toggle={this.state.toggle} />
          <Welcome text="this is using props" toggle={this.state.toggle} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React. This feels good.
          </a>
          {this.state.toggle && <p>This should show and hide</p>}{" "}
          {/* inline conditional */}
          <button onClick={this.toggle}>Show / Hide</button>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text, toggle } = this.props;
    console.log(toggle);
    return <h1 className="App-title">{text}</h1>;
  }
}

export default App;
