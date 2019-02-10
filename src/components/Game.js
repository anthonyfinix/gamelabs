import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Game.css"

class Game extends Component {

  
  render() {
    // console.log(this.props.game)
    return (
      <div className="game card bg-dark text-white m-3 bg-primary rounded-0 shadow">
        <Link to={"/gameDetails/"+this.props.game.id} >
        <img src={""+this.props.game.background_image} style={{height: 130}} className="card-img" alt={""+this.props.game.slug}></img>
        </Link>
      </div>
    );
  }
}

export default Game;
