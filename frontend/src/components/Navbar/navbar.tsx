import React from "react"

export function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo-container">
          <div className="gg-dollar"></div>
          <div className="logo-slogan"> 
            <h1 className="logo-title">RateXchange</h1>
            <h1 className="logo-names">FIEDKO&BANASIUK</h1>
          </div>
        </div>
        <div className="navbar-title">
          Online Currency Rates
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
}