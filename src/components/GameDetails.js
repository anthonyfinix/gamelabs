import React, { Component } from "react";
import './gameDetails.css'
class gameDetails extends Component {

  constructor(props){
    super(props)
    this.state = {
      gameId :this.props.match.params.gameId,
      gameDetails: '',
      isLoaded: false
    }
  }

  componentDidMount() {
    this.getSingleGame()
  }
  render() {
    const header={
      backgroundImage: "url('"+this.state.gameDetails.background_image+"')",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height:300,
      fibackgroundColor:'linear-gradient(#e66465, #9198e5)',
      position: 'relative'
    }

    if (!this.state.isLoaded) {
      return(<div className="spinner-1"></div>)
    }else{
      return(
        <div >
          <div style={header} className="header">
            <h3>{this.state.gameDetails.name}</h3>
          </div>
          <div className="d-flex justify-content-between container-fluid">
            <div className="p-4">
              <p className="font-weight-bold">Developers</p>
              <div className="d-flex mb-3">{this.getDevelopers()}</div>
              <p className="font-weight-bold">publisher</p>
              <div className="d-flex mb-3">{this.getPublisher()}</div>
              <p className="font-weight-bold">Description</p>
              {this.state.gameDetails.description_raw}
            </div>
            <div className="sideBar col-3 pt-4">
              <div className="d-flex align-items-start">
                <i className="material-icons mr-3">games</i>
                <p className="font-weight-bold mb-1">Category</p>
              </div>
                <ul>{this.getCategories()}</ul>
              <div className="d-flex align-items-start">
                <i className="far fa-futbol fa-lg mt-1 mr-3"></i>
                <p className="font-weight-bold mb-1">Platform</p>
              </div>
                <ul>{this.getPlatforms()}</ul>
            </div>
          </div>
        </div>
      );
    }
  }

  getSingleGame = ()=>{
    fetch("https://api.rawg.io/api/games/"+this.state.gameId,{
      method: 'GET',
      header: {
        'user-agent': 'gamelabz/1.1'
      }
    }).then(response => response.json())
    .then(res => {
      this.setState({
        gameDetails:res,
        isLoaded: true
      });
      console.log(this.state.gameDetails)
    });
  }

  getCategories(){
    let categories = []
    this.state.gameDetails.categories.forEach((element,index) => {
      categories.push(<li key={index}>{element.name}</li>)
    });
    return categories
  }

  getPlatforms(){
    let platforms = []
    this.state.gameDetails.platforms.forEach((element,index) => {
      platforms.push(<li key={index}>{element.platform.name}</li>)
    });
    return platforms
  }

  getDevelopers(){
    let developer = []
    this.state.gameDetails.developers.forEach((element,index) => {
      developer.push(<p className="developers shadow" key={index}><img src={element.image_background} alt={element.slug}></img>{element.name}</p>)
    });
    return developer
  }

  getPublisher(){
    let publisher = []
    this.state.gameDetails.publishers.forEach((element,index) => {
      publisher.push(<p className="developers shadow" key={index}><img src={element.image_background} alt={element.slug}></img>{element.name}</p>)
    });
    return publisher
  }
}

export default gameDetails;
