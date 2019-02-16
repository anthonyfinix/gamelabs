import React, { Component } from "react";
import { Link } from "react-router-dom";

class Game extends Component {

  render() {

    const game = {
      position: 'relative',
      height: 300,
    }

    return (
      <Link className="col-2 px-0" to={"/gameDetails/"+this.props.id} >
        <div style={game} className="text-white pb-5 rounded-0 bg-primary text-left mx-0">
          <img src={""+this.props.background_image} style={{height: 120}} className="card-img rounded-0" alt={""+this.props.slug}></img>
          <div className="card-body p-2">
            <p className="mt-2 mb-1 pl-2">{this.props.name}</p>
            <div className="rating d-flex jsutify-content-around my-1 pl-2 mb-2">{this.getRating()}</div>
            <div className="d-flex flex-wrap jsutify-content-around pl-2" style={{opacity:0.2}}>{this.getPlatform()}</div>
          </div>
        </div>
      </Link>
    );
  }

  getRating = ()=>{
    let ratings = []
    for(let i=0;i < Math.round(this.props.rating);i++){
      ratings.push(<i key={i} style={{color:'yellow'}} className="fas fa-star fa-xs mr-1"></i>)
    }
    return ratings
  }

  getPlatform = ()=>{
    let platforms = []
    this.props.parent_platforms.forEach((element, i) => {
      if (element.platform.slug === 'pc') {
        platforms.push(<i key={i} className="fas fa-desktop fa-sm mr-3 my-2"></i>)
      }else if (element.platform.slug === 'playstation') {
        platforms.push(<i key={i} className="fab fa-playstation fa-sm mr-3 my-2"></i>)
      } else if(element.platform.slug === 'xbox'){
        platforms.push(<i key={i} className="fab fa-xbox fa-sm mr-3 my-2"></i>)
      } else if(element.platform.slug === 'mac'){
        platforms.push(<i key={i} className="fab fa-apple fa-sm mr-3 my-2"></i>)
      } else if(element.platform.slug === 'ios'){
        platforms.push(<i key={i} className="fab fa-app-store-ios fa-sm mr-3 my-2"></i>)
      } else if(element.platform.slug === 'android'){
        platforms.push(<i key={i} className="fab fa-android fa-sm mr-3 my-2"></i>)
      } else if (element.platform.slug === 'nintendo'){
        platforms.push(<i key={i} className="fab fa-nintendo-switch fa-sm mr-3 my-2"></i>)
      } else{
        platforms.push(<i key={i} className="fab fa-linux fa-sm mr-3 my-2"></i>)
      }
    });
    return platforms
  }
}

export default Game;
