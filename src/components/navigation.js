import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {

  state = {
    toggle: ""
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="navbar-brand">GameLabs</Link>
      <button className="navbar-toggler" type="button" onClick={this.toggleMenu}><i className="fas fa-bars mr-2"></i>Menu</button>
        <div className={"collapse navbar-collapse "+this.state.toggle} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/profile" className="fas fa-user-circle fa-lg nav-link"></Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  toggleMenu = ()=>{
    if (this.state.toggle === "") {
      this.setState({
        toggle: "show"
      })
    }else{
      this.setState({
        toggle: ""
      })
    }
  }
}

export default Navigation;
