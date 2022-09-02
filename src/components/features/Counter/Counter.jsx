import "./Counter.css";
import { useContext } from "react";
import {counterContext} from "../../contexts/CounterContext";
import {
  upAction,
  downAction,
  resetAction,
  updateAction,
  randomEquationAction,
} from "../../../store/actions/counter_actions";

// ChildContextProvider
// let startState=0;

function Counter() {
  const { count, dispatch } = useContext(counterContext);
  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={() => dispatch(upAction)}>UPPER</button>
      <button onClick={() => dispatch(downAction)}>DOWNER</button>
      <button onClick={() => dispatch(resetAction)}>RESET</button>
      <button onClick={() => dispatch(updateAction(8))}>UPDATE</button>
      <button
        onClick={() =>
          dispatch(randomEquationAction(Math.floor(Math.random() * 11)))
        }
      >
        RANDOM EQUATION
      </button>
    </div>
  );
}

export default Counter;
