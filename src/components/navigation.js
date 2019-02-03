import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand">Navbar</a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-white">Home</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
