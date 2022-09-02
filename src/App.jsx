import "./App.css";

import CounterProvider from "./components/contexts/CounterContext";
import Counter from "./components/features/Counter/Counter";

function App() {

  return (
    <div className="App">
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default App;
