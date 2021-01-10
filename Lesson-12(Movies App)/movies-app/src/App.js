import "./App.css";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import MoviesPage from "./components/pages/MoviesPage";
import { Container } from "semantic-ui-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container text>
          Component App
          <br />
          <Route path="/movies" component={MoviesPage}></Route>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;