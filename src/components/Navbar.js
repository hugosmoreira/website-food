import React, { useState } from "react";
import Logo from "../assets/logologo2.png";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  

  
  return (
    <div className="navbar">
      <div className="leftSide" >
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button >
          
        </button>
      </div>
    </div>
  );
}

export default Navbar;
