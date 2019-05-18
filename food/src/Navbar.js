import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  handleLogin = () => {
    alert("Logged you in");
    this.props.history.push("/food/salmon");
  };

  handleBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleLogin}>Log In</button>
        <button onClick={this.handleBack}>Go back</button>
      </div>
    );
  }
}

export default withRouter(Navbar);
