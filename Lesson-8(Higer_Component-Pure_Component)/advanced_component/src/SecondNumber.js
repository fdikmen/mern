import React, { Component,PureComponent } from 'react'

export default class SecondNumber extends PureComponent {
    
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.secondNumber !== this.props.secondNumber;
    // }
    
    
    render() {
        console.log("SecondNumber Component Rendering...");
        return (
            <div>
                Second : {this.props.secondNumber}
            </div>
        )
    }
}
