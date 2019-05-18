import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class extends Component {
  render() {
    const name = this.props.match.params.name;
    // if (/\d/.test(name)) this.props.history.push("/notfound");
    const url = `https://source.unsplash.com/1600x900/?${name}`;
    return (
      <div className="Food">
        {/\d/.test(name) ? (
          <Redirect to="/" />
        ) : (
          <div>
            <h1>I love to eat {name}</h1>
            <img height={200} src={url} alt={name} />
          </div>
        )}
      </div>
    );
  }
}
