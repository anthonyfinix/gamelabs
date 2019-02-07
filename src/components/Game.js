import React, { Component } from "react";

class Game extends Component {
  render() {
      console.log(this.props.game)
    return (
        <div className="card m-3 bg-primary shadow" style={{width: 280}}>
            <img src={""+this.props.game.background_image} style={{height: 180}} className="card-img-top" alt={""+this.props.game.slug}></img>
            <div className="card-body">
                <h5 className="card-title">{this.props.game.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Rating: {this.props.game.rating}</h6>
            </div>
        </div>
    );
  }
}

export default Game;
