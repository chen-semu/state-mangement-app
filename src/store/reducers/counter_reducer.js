import { RANDOMEQUATION, UPDATE } from "../actions/counterTypes";
import {
  upAction,
  downAction,
  resetAction,
  updateAction,
  randomEquationAction,
} from "../actions/counter_actions";
import { randomEquation } from "../actions/randomEquation";

export const counter_reducer = (state, action) => {
  switch (action.type) {
    case upAction.type:
      return state + 1;
    case downAction.type:
      return state - 1;
    case resetAction.type:
      return 0;
    case UPDATE:
      return action.payload;
    case RANDOMEQUATION:
      return randomEquation(state, action.payload);
    default:
      return 0;
  }
};
