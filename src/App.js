import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";



import "./App.css"

import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import GameDetails from "./components/GameDetails";
import NotFound from "./components/Notfound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
          <Navigation />
            <div id="main-wrapper" className="d-flex">
              <Sidebar></Sidebar>
              <div id="content">
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/gameDetails/:gameId" name="gameId" component={GameDetails} />
                  <Route path="/profile" component = {Profile} />
                  <Route component = {NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
