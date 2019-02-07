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
    .then(res => res = this.setState({games: res.results,isLoaded: true}));
  }

  render() {
    if (!this.state.isLoaded) {
      return(<div className="spinner-1"></div>)
    }else{
      return (
        <div className="d-flex flex-wrap justify-content-around">
          {
            this.state.games.map((game)=>(<Game key={game.id} game={game}/>))
          }
        </div>
      );
    }
  }
}

export default Home;
