import * as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case actionTypes.RESET:
      return { ...state, counter: 0 };
    case actionTypes.INC5:
      return { ...state, counter: state.counter + action.value };
    case actionTypes.DEC5:
      return { ...state, counter: state.counter - action.value };
    case actionTypes.STORE:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case actionTypes.REMOVE:
      const updatedArray = state.results.filter(
        (item) => item.id !== action.item
      );
      return {
        ...state,
        results: updatedArray,
      };
  }
  return state;
};

const initialState = {
  counter: 0,
  results: [
    {
      id: 1,
      value: 7,
    },
    {
      id: 2,
      value: 12,
    },
    {
      id: 3,
      value: 14,
    },
  ],
};

export default reducer;
