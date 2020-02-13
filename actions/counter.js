import { actionsType } from "../constants/counter";

const actions = {
  increment: () => ({
    type: actionsType.COUNTER_INCREMENT
  }),
  decrement: () => ({
    type: actionsType.COUNTER_DECREMENT
  })
};

export { actions };
