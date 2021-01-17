import React, { Component } from "react";
import ActorList from "../ActorList";

export default class HomePage extends Component {
  state = {
    actorList: [
      {
        id: "1",
        name: "Morgan Freeman",
        desc:
          "(7 movies): 1-The Shawshank Redemption 2-The Dark Knight 3-Se7en 4-The Dark Knight Rises 5-Batman Begins 6-Unforgiven 7-Million Dollar Baby",
        photoUrl:
          "https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_SX150_CR0,0,150,150_.jpg",
      },
      {
        id: "2",
        name: "Al Pacino",
        desc:
          "(5 movies): 1-The Godfather 2-The Godfather: Part II 3-Scarface 4-Heat 5-In the Name of the Father",
        photoUrl:
          "https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_SX150_CR0,0,150,150_.jpg",
      },
      {
        id: "3",
        name: "Robert Duvall",
        desc:
          "(5 movies): 1-The Godfather 2-The Godfather: Part II 3-Apocalypse Now 4-To Kill a Mockingbird 5-Network",
        photoUrl:
          "https://m.media-amazon.com/images/M/MV5BMjk1MjA2Mjc2MF5BMl5BanBnXkFtZTcwOTE4MTUwMg@@._V1_SX150_CR0,0,150,150_.jpg",
      },
      {
        id: "4",
        name: "Robert De Niro",
        desc:
          "(9 movies): 1-The Godfather: Part II 2-Joker 3-Goodfellas 4-On Upon a Time in America 5-Taxi Driver 6-Casino 7-Heat 8-Raging Bull 9-The Deer Hunter",
        photoUrl:
          "https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_SX150_CR0,0,150,150_.jpg",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>Welcome to Movie App!</h1>
        <br />
        <ActorList actorList={this.state.actorList} />
      </div>
    );
  }
}
