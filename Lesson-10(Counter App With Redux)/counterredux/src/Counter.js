import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import {Button,Icon} from 'semantic-ui-react';
import {increaseCount,decreaseCount} from "./actions/counterActions";


export const Counter = (props) => {
  return (
    <div>
        <hr style={{paddingTop:"100px"}}/>
      <Button onClick={props.decreaseCount} icon labelPosition="left">
        <Icon name="minus" />
        Decrease
      </Button>
      <span style={{padding:"10px"}}>{props.count}</span>
      <Button onClick={props.increaseCount} icon labelPosition="right">
        Increase
        <Icon name="plus" />
      </Button>
        <hr/>
    </div>
  );
};

const mapStateToProps = (state) => {
    return{
        count:state.count,
    }
};

const mapDispatchToProps =(dispatch)=>
bindActionCreators({increaseCount,decreaseCount},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
