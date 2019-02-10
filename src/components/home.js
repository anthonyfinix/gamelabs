import React, { Component } from "react";
import "./Home.css"
import Game from "./Game"


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://api.rawg.io/api/games",{
      method: 'GET'
    }).then(response => response.json())
    .then(res => this.setState({games: res.results,isLoaded: true}));
  }

  render() {
    if (!this.state.isLoaded) {
      return(<div className="spinner-1"></div>)
    }else{
      return (
        <div className="d-flex flex-wrap justify-content-around p-1">
          {
            this.state.games.map((game, index)=>(<Game key={game.id} animDelay={index} game={game}/>))
          }
        </div>
      );
    }
  }
}

export default Home;
