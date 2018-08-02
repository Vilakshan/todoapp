import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChildComponent from './ChildComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.name = "";
    this.state = {
      p1: "",
      user: {
        name: "Vilakshan",
        age: ""
      }
    };
    this.onbtnClick = this.onbtnClick.bind(this);
  }

  onbtnClick() {
    this.setState({
      ...this.state,
      user: {
        name: "Vili"        
      }
    });
  }

  render() {
    return (
      <ChildComponent user={this.state.user} onbtnClick={this.onbtnClick}/>
    );
  }
}

export default App;
