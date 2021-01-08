import React, { Component } from 'react'

export default class Counter extends Component {
    state={number:0}
incrementState=()=>{this.setState({number:this.state.number+1});}
decrementState=()=>{this.setState({number:this.state.number-1});}
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.decrementState}>- Minus</button>
                <button onClick={this.incrementState}>+ Plus</button>
            </div>
        )
    }
}
