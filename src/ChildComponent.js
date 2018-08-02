import React, { Component, Fragment } from "react";

class ChildComponent extends Component {
  render() {
    return (
      <Fragment>
        <div>{this.props.user.name}</div>
        <button onClick={this.props.onbtnClick}>Click</button>
      </Fragment>
    );
  }
}

export default ChildComponent;
