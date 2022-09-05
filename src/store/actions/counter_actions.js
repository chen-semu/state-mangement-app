import { UP, DOWN, RESET, UPDATE, RANDOMEQUATION } from "./counterTypes";
export const upAction = () => {
  return{
    type: UP,
  }
};
export const downAction = () => {
  return{
    type: DOWN,
  }
};
export const resetAction = () => {
  return{
    type: RESET,
  }
};
export const updateAction = (newNum) => {
  return { type: UPDATE, payload: newNum };
};
export const randomEquationAction = (randomNum) => {
  return { type: RANDOMEQUATION, payload: randomNum };
};
