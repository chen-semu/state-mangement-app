import { createContext, useReducer } from "react";
import { counter_reducer } from "../../store/reducers/counter_reducer";

export const counterContext = createContext();

export let startState = 0;

export default function CounterProvider({ children }) {
  const [count, dispatch] = useReducer(counter_reducer, startState);

  return (
    <counterContext.Provider value={{ count, dispatch }}>
      {children}
    </counterContext.Provider>
  );
}
