import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <ul className="list-group align-items-between">
          <li className="list-group-item">Menu<i className="fas fa-bars float-right mt-1"></i></li>
          <li className="list-group-item">All Games</li>
          <li className="list-group-item">Top games</li>
          <li className="list-group-item">Category</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
