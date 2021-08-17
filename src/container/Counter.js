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
        <button onClick={this.props.inc5}>Add 5</button>
        <button onClick={this.props.dec5}>Decrease 5</button>
        <button onClick={this.props.store}>Save the results</button>
        <ul>
          {this.props.storedResults.map(item => <li key = {item.id} onClick={() => this.props.remove(item.id)}>{item.value}</li>) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storedResults: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    reset: () => dispatch({ type: actionTypes.RESET }),
    inc5: () => dispatch({ type: actionTypes.INC5, value: 5 }),
    dec5: () => dispatch({ type: actionTypes.DEC5, value: 5 }),
    store: () => dispatch({ type: actionTypes.STORE }),
    remove: (id) => dispatch({ type: actionTypes.REMOVE, item: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
