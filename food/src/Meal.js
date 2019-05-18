import React, { Component } from "react";

export default class Meal extends Component {
  render() {
    const foodName = this.props.match.params.foodName;
    const drinkName = this.props.match.params.drinkName;
    const foodImage = `https://source.unsplash.com/1600x900/?${foodName}`;
    const drinkImage = `https://source.unsplash.com/1600x900/?${drinkName}`;
    return (
      <div>
        <h1>Meal Components</h1>
        <h4>{foodName}</h4>
        <img height={200} src={foodImage} alt="food" />
        <h4>{drinkName}</h4>
        <img height={200} src={drinkImage} alt="drinks" />
      </div>
    );
  }
}
