import React from 'react';
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import Switch from "react-switch";
import './ButtonMode.css';

function ButtonMode({ darkMode, setDarkMode }) {
  return (
    <label className='switch'>
      <Switch 
        onChange={() => setDarkMode(!darkMode)}
        checked={darkMode}
        offColor="#3c3f4b"
        onColor="#3c3f4b"
        offHandleColor="#fff"
        onHandleColor="#000"
        handleDiameter={20}
        uncheckedIcon={<div className="switch__icon switch__icon--moon"><FiMoon /></div>}
        checkedIcon={<div className="switch__icon switch__icon--sun"><FiSun /></div>}
      />
    </label>
  );
}

export default ButtonMode;