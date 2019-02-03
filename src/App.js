import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <BrowserRouter>
          <Route path="/" component={Home} exact />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
