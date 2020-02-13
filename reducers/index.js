import { reducers as counterReducers } from "./counter";
import { combineReducers } from "redux";
const reducers = combineReducers({
  counterReducers
});
export { reducers };
