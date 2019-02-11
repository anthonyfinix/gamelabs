import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Game.css"

class Game extends Component {
  render() {
    return (
      <Link to={"/gameDetails/"+this.props.game.id} >
        <div className="game card text-white m-3 mb-4 pb-5 rounded-0 bg-primary">
          <img src={""+this.props.game.background_image} style={{height: 150}} className="card-img rounded-0" alt={""+this.props.game.slug}></img>
          <div className="card-body p-2">
            <p className="mt-2 mb-1 pl-2">{this.props.game.name}</p>
            <div className="rating d-flex jsutify-content-around my-1 pl-2 mb-2">{this.getRating()}</div>
            <div className="platform d-flex jsutify-content-around my-1 pl-2">{this.getPlatform()}</div>
          </div>
        </div>
      </Link>
    );
  }

  getRating(){
    let ratings = []
    for(let i=0;i < Math.round(this.props.game.rating);i++){
      ratings.push(<i key={i} style={{color:'yellow'}} className="fas fa-star fa-xs mr-1"></i>)
    }
    return ratings
  }

  getPlatform(){
    let platforms = []
    this.props.game.parent_platforms.forEach((element, i) => {
      if (element.platform.slug === 'pc') {
        platforms.push(<i key={i} className="fas fa-desktop fa-sm mr-3"></i>)
      }else if (element.platform.slug === 'playstation') {
        platforms.push(<i key={i} className="fab fa-playstation fa-sm mr-3"></i>)
      } else if(element.platform.slug === 'xbox'){
        platforms.push(<i key={i} className="fab fa-xbox fa-sm mr-3"></i>)
      } else if(element.platform.slug === 'mac'){
        platforms.push(<i key={i} className="fab fa-apple fa-sm mr-3"></i>)
      } else if(element.platform.slug === 'ios'){
        platforms.push(<i key={i} className="fab fa-app-store-ios fa-sm mr-3"></i>)
      } else if(element.platform.slug === 'android'){
        platforms.push(<i key={i} className="fab fa-android fa-sm mr-3"></i>)
      } else{
        platforms.push(<i key={i} className="fab fa-linux fa-sm mr-3"></i>)
      }
    });
    return platforms
  }
}

export default Game;
