import './App.css'
import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';
import Users from './Users';
import FirstNumber from './FirstNumber';
import SecondNumber from './SecondNumber';

export default class App extends Component {
  state={posts:[],users:[],loading:true,firstNumber:Math.random(),secondNumber:Math.random()};
  componentWillMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(post=>post.data)
    .then(posts=>
      {
        setTimeout(() => {
          this.setState({posts,loading:false})
        }, 3000);
      })

      axios.get("https://jsonplaceholder.typicode.com/users")
    .then(user=>user.data)
    .then(users=>
      {
        setTimeout(() => {
          this.setState({users,loading:false})
        }, 2000);
      })
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({firstNumber:Math.random()});
    }, 1000);
    
  }
  
  
  render() {
    return (
      <div className="">
        App
        <FirstNumber firstNumber={this.state.firstNumber}/>
        <SecondNumber secondNumber={this.state.secondNumber}/>
        <hr/>
        <Post {...this.state}/>        
        <hr/>
        <Users {...this.state}/>
      </div>
    )
  }
}
