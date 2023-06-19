import React, { useState } from 'react';
import ColorPicker from './Components/ColorPicker';
import './App.css'

function App() {
  const colors = [
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#FF00FF',
    '#00FFFF',
    '#FFA500',
    '#800080',
    '#FFC0CB',
    '#008000',
    '#FF6347',
    '#00CED1',
    '#8B4513',
    '#FF8C00',
    '#4682B4',
    '#FFD700',
  ];
  
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="app">
      <h1 className="color-picker-title">Color  Picker</h1>
      <div className="app_colorpicker_container" style={{backgroundColor: selectedColor}}>
        
        <ColorPicker colors={colors} onColorSelect={handleColorSelect} />
      </div>
    </div>
  );
}

export default App;
