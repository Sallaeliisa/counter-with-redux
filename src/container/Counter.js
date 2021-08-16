import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="counter_text">Your score: {this.props.ctr}</div>
        <button onClick={this.props.onIncCounter}>Add 1</button>
        <button onClick={this.props.onDecCounter}>Decrease 1</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    reset: () => dispatch({ type: actionTypes.RESET }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
