import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleClick = () => {
    alert("Saved your food");
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Search For a Food</h1>
        <input
          type="text"
          placeholder="Search"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <Link to={`/food/${this.state.query}`}>Go!</Link>
        <button onClick={this.handleClick}>Save New Food</button>
      </div>
    );
  }
}
