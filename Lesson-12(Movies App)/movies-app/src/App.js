import "./App.css";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import MoviesPage from "./components/pages/MoviesPage";
import NewMoviesPage from "./components/pages/NewMoviesPage";
import { Container } from "semantic-ui-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container text>
        <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/movies" component={MoviesPage}></Route>
          <Route exact path="/movies/new" component={NewMoviesPage}></Route>
          <Route exact path='/movie/edit/:id' component={NewMoviesPage}></Route>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;