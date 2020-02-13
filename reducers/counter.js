import { actionsType } from "../constants/counter";

const INITIAL_STATE = {
  counter: 0
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsType.COUNTER_INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actionsType.COUNTER_DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export { reducers };
