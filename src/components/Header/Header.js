import React, { useState, useEffect } from 'react';
import ButtonMode from '../ButtonMode/ButtonMode';
import './Header.css';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let linkElement = document.getElementById("theme-stylesheet");

    if (!linkElement) {
      linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.id = "theme-stylesheet";
      document.head.appendChild(linkElement);
    }

    linkElement.href = darkMode ? "/App.dark.css" : "App.css";
    document.body.classList.add('theme-transition');
    setTimeout(() => document.body.classList.remove('theme-transition'), 500);
  }, [darkMode]);

  return (
    <header className="header">
      <h1 className="header__title">Just Todo It</h1>
      <div className="header__button">
        <ButtonMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  );
}

export default Header;