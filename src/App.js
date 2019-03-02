import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";



import "./App.css"

import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Game from "./components/games";
import Profile from "./components/Profile";
import NotFound from "./components/Notfound";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      gameFetched :'false',
    }
  }


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
                  <Route path="/" component={Game} exact />
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
