import React, { Component } from "react";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      isLoaded: false,
      
    };
  }

  componentDidMount() {
    
    fetch("https://api-v3.igdb.com/games",{
      method: 'POST',
      headers:{
        "user-key": "0e2efbeed8b9812ae1c232d6d5a7ddff",
        "accept": "application/json"
      }
    }).then(response => response.text())
    .then(text => console.log(text));

  }

  render() {
    return (
      <div id="home" className="container">
        <div>
          <h4>Data Has been Loaded</h4>
        </div>
      </div>
    );
  }
}

export default Home;
