import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">TechWave</a>
      <nav className="header__nav">
        <a href="/" className="header__nav-link header__nav-item">Home</a>
        <a href="/about" className="header__nav-link header__nav-item">About</a>
        <a href="/contact" className="header__nav-link header__nav-item">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
