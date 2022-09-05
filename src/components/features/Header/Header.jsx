import "./Header.css";
// import React from "react";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="header">
    <Link to='/'><button>Home</button></Link>
    <Link to='About'><button>About</button></Link>
    </div>
  );
};

export default Header;
