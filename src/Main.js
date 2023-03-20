import React, { Component } from "react";
import { Route } from "react-router-dom";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact={true}
          path="/"
          render={() => (
            <div className="App">
              <Weather city="Dnipro" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/burgas"
          render={() => (
            <div className="App">
              <Weather city="Burgas" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/brno"
          render={() => (
            <div className="App">
              <Weather city="Brno" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/jerusalem"
          render={() => (
            <div className="App">
              <Weather city="Jerusalem" />
            </div>
          )}
        />
      </div>
    );
  }
}
