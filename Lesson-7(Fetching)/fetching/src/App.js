import logo from "./logo.svg";
import "./App.css";
import UserList from "./UserList";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Switch,
} from "react-router-dom";
import React,{ Component } from "react";
import Error from './Error'

const About = ({ match }) => {
  console.log("Result=>", match);
  if(match.params.id==1 || match.params.id==2)
  {
    return <h1>About Page {match.params.id}</h1>;
  }
  else  
  {
    return <h1>Not Found</h1>;
  }  
};

const Profile = () => {
  return (
    <h1>
      Profile Page <br /> Welcome User
    </h1>
  );
};


/*FUNC COMP => CLASS COMP */
/*“function App()” tanımını “class App extends Component” tanımı ile değiştirmeli ve render(){}
Metodunu yazıp içine return ögesini yerleştirmeliyiz. */
class App extends Component {
  state = { loggedIn: false };
  onClickButton = () => {
    this.setState((prevState) => ({ loggedIn: !prevState.loggedIn }));
    // this.setState({ loggedIn: !this.state.loggedIn });
  };
  render() {
     console.log(this.state.loggedIn);
    return (
      <Router>
        <div className="App">
          APP COMPONENT
          <br />
          <input
            type="button"
            onClick={this.onClickButton}
            value={this.state.loggedIn ? "Logout" : "Login"}
          ></input>
          <br />
          <NavLink activeStyle={{ color: "red" }} exact to="/">
            Home
          </NavLink>
          <br />
          <Link to="/Contact/">
            Contact
          </Link>
          <br />
          <Link to="/Map">
            Map
          </Link>
          <br />
          <NavLink activeStyle={{ color: "red" }} exact  strict to="/About/1">
            About-1
          </NavLink>
          <br />
          <NavLink activeClassName="activeClass" exact  strict to="/About/2">
            About-2
          </NavLink>
          <br />
          <NavLink activeClassName="activeClass" exact to="/Profile">
            Profile
          </NavLink>
          <br />
          <NavLink activeClassName="activeClass" exact strict to="/Users">
            Users
          </NavLink>
          <br />
          <Switch>
          <Route
            path="/"  
            exact          
            render={() => {
              return <h1>Home Page</h1>;
            }}
          />
          <Route
            path="/Contact/"
            strict
            exact
            render={() => {
              return <h1>Contact Page</h1>;
            }}
          />
          <Route
            path="/Map"
            render={() => {
              return <h1>Map Page</h1>;
            }}
          />
          <Route path="/About/:id" exact strict component={About} />
           {/* <Route path="/Profile" exact component={Profile} />  */}
           <Route
              path="/Profile"
              exact
              strict
              component={() =>this.state.loggedIn ? <Profile /> : <Redirect to="/" />  }
            ></Route>
          <Route path="/Users" exact strict component={UserList} />
          {/* <UserList></UserList> */}

          <Route component={Error}></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
