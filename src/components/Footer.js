import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <p className="footer__text">
          &copy; 2022 -{" "}
          <a href="." className="footer__link">
            React App
          </a>
        </p>
      </footer>
    </div>
  );
};
