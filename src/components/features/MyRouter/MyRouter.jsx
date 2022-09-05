import "./MyRouter.css";
import {Routes,Route} from "react-router-dom";
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import PageNotFound from '../../pages/PageNotFound/PageNotFound'

function MyRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  );
};

export default MyRouter;
