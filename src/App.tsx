import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Movies from "./containers/Movies/Movies";
import Favorites from "./containers/Favorites/Favorites";
import Detail from "./containers/Detail/Detail";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/movie/:id" component={Detail} />
          <Route path="/" exact component={Movies} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
