import "./Home.css";
// import React from "react";
import CounterProvider from "../../contexts/CounterContext";
import Counter from "../../features/Counter/Counter";

function Home() {
  return (
    <div className="home">
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default Home;
