// import "./App.css";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/features/Header/Header";
import Footer from "./components/features/Footer/Footer";
import MyRouter from "./components/features/MyRouter/MyRouter";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <MyRouter/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
