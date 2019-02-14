import React, { Component } from "react";
import "./Home.css"
import Game from "./Game"


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      isLoaded: false,
      currPage: 1
    };
  }
  
  componentDidMount() {
    this.loadGames()
  }
  
  loadGames=()=>{
    fetch("https://api.rawg.io/api/games?page="+this.state.currPage,{
      method: 'GET'
    }).then(response => response.json())
    .then(res => {
      this.setState({
        games: [...this.state.games,...res.results],
        isLoaded: true,
      });
      // console.log(this.state.games[9])
      console.log(res)
    });
  }

  loadMore = ()=>{
    this.setState(prevState =>({
      currPage: prevState.currPage+1
    }), this.loadGames);
  }

  render() {
    if (!this.state.isLoaded) {
      return(<div className="spinner-1"></div>)
    }else{
      return (
        <div className="HomeWrapper p-1 pt-3 text-center">
        <div className=" d-flex flex-wrap justify-content-around">
          {
            this.state.games.map((game, index,)=>(<Game key={game.id} animDelay={index} {...game}/>))
          }
        </div>
          <button onClick={this.loadMore} className="btn btn-primary">Load More</button>
        </div>
      );
    }
  }
  

}

export default Home;
