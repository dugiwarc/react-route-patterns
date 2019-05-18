import React, { Component } from "react";
import Food from "./Food";
import FoodSearch from "./FoodSearch";
import Meal from "./Meal";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/food/:name"
            // component={Food}
            render={routeProps => <Food authenticated={true} {...routeProps} />}
          />
          {/* <Route
            exact
            path="/food/chicken"
            render={() => <Food name="chicken" />}
          />
          <Route
            exact
            path="/food/banana"
            render={() => <Food name="banana" />}
          /> */}
          <Route
            exact
            path="/food/:foodName/drink/:drinkName"
            component={Meal}
          />
          <Route
            exact
            path="/"
            render={routeProps => <FoodSearch {...routeProps} />}
          />
        </Switch>
      </div>
    );
  }
}
