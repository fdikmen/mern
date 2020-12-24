import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';

const About=({match})=>
{
  console.log("Result=>",match);
  return <h1>About Page {match.params.id}</h1>
}

const Profile=()=>
{
  return <h1>Profile Page <br/> Welcome User</h1>
}

function App() {
  return (
    <Router>
    <div className="App">
     APP COMPONENT<br/>
    <NavLink  activeStyle={{color:'red'}} exact to="/">Home</NavLink><br/>
    <Link  exact to="/Contact/">Contact</Link><br/>
    <Link  exact to="/Map">Map</Link><br/>
    <NavLink activeStyle={{color:'red'}} exact to="/About/1">About-1</NavLink><br/>
    <NavLink activeClassName="activeClass" exact to="/About/2">About-2</NavLink><br/>
    <NavLink activeClassName="activeClass" exact to="/Profile">Profile</NavLink><br/>


      <Route path="/" exact={true}  render={()=>{return <h1>Home Page</h1>}}/>
      <Route path="/Contact/" strict exact render={()=>{return <h1>Contact Page</h1>}}/>
      <Route path="/Map" render={()=>{return <h1>Map Page</h1>}}/>
      <Route path="/About/:id" exact component={About}/>
      <Route path="/Profile" exact component={Profile}/>

     <UserList></UserList>
    </div>
    </Router>
  );
}

export default App;
