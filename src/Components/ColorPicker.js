import React, { useState } from 'react';
import './ColorPicker.css'


function ColorPicker({ colors, onColorSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleColorList = () => {
    setIsOpen(!isOpen);
  };

  const selectColor = (color) => {
    onColorSelect(color);
    setIsOpen(false);
  };

  return (
    <div className="color-picker">
      {isOpen && (
        <ul className="color-picker__list">
          {colors.map((color, index) => (
            <li
              key={index}
              className="color-picker__item"
              style={{ backgroundColor: color }}
              onClick={() => selectColor(color)}
            />
          ))}
        </ul>
      )}
      <button className="color-picker__button" onClick={toggleColorList}>
        Pick a color
      </button>
    </div>
  );
}

export default ColorPicker;
