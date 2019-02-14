import React, { Component } from "react";

class gameDetails extends Component {

  constructor(props){
    super(props)
    this.state = {
      gameId :this.props.match.params.gameId,
      gameDetails: {},
      isLoaded: false
    }
  }

  componentDidMount() {
    this.getSingleGame()
  }
  
  render() {
    if (!this.state.isLoaded) {
      return(<div className="spinner-1"></div>)
    }else{
      return(
        <div>
          <div className="container my-5 d-flex justify-content-between">
            <h5>{this.state.gameDetails.name}</h5>
          </div>
          <div className="container my-5">
            <h5>{this.state.gameDetails.description_raw}</h5>
          </div>
        </div>
      );
    }
  }

  getSingleGame = ()=>{
    fetch("https://api.rawg.io/api/games/"+this.state.gameId,{
      method: 'GET'
    }).then(response => response.json())
    .then(res => {
      this.setState({
        gameDetails:res,
        isLoaded: true
      });
      console.log(this.state.gameDetails)
    });
  }
}

export default gameDetails;
