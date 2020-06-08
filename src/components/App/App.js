import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../elements/Header/Header";
import NotFound from "../elements/NotFound/NotFound";
import Home from "../Home/Home";
import Movie from "../Movie/Movie";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/:movieId" component={Movie} exact />
              <Route component={NotFound} exact />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
