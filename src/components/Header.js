import React from "react";
import reactLogo from "../images/react-logo.png";

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img src={reactLogo} alt="logo" className="logo" />
        <ul className="nav__list">
          <li className="nav__item">
            <a href="." className="nav__link">
              Prices
            </a>
          </li>
          <li className="nav__item">
            <a href="." className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="." className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
