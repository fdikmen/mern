import React, { Component } from 'react'

export default class FirstNumber extends Component {
    render() {
        console.log("FirstNumber Component Rendering...");
        return (
            <div>
                First: {this.props.firstNumber}
            </div>
        )
    }
}
