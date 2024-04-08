import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [backgroundColour, setBackgroundColour] = useState('white');
  const [fontStyle, setFontStyle] = useState('Arial');
  const [image, setImage] = useState('https://gifdb.com/images/high/color-pastel-rainbow-lines-xb4joddynqs5zt6u.gif');
  const [description, setDescription] = useState('Welcome to the interactive color changing landing page.Explore the world of vibrant colors and dwell yourself into aesthetic fonts and textures.');

  const handleBackgroundChange = (color) => {
    setBackgroundColour(color);
    // Set image and description based on color
    switch(color) {
      case 'white':
        setImage('https://www.thisiscolossal.com/wp-content/uploads/2014/06/9.gif');
        setDescription('White as snow, pure as love. Embrace the elegance of white. Finding peace in the simplicity of white. A white canvas for endless possibilities.It has a variety of associations, including coldness, sterility, and innocence The color will change over time and it is interesting to see how we change along with it. Keep a journal of how you feel with each color you connect with.');
        break;
      case 'lightblue':
        setImage('https://media2.giphy.com/media/tc6uGU4GnKGDC/giphy.gif');
        setDescription('Because blue is favored by so many people, it is often viewed as a non-threatening color that can seem conservative and traditional. Blue calls to mind feelings of calmness and relaxation The color will change over time and it is interesting to see how we change along with it. Keep a journal of how you feel with each color you connect with.');
        break;
      case 'lightgreen':
        setImage('https://cdn.pixabay.com/animation/2023/04/12/18/42/18-42-54-71_512.gif');
        setDescription('Some scientists and researchers also believe that because our eyes are at the peak of their perception to detect the wavelengths corresponding with the color green, the shade may calm us down. With less strain to perceive the colors, our nervous system can relax when perceiving the tone The color will change over time and it is interesting to see how we change along with it. Keep a journal of how you feel with each color you connect with.');
        break;
      case 'lightcoral':
        setImage('https://cdn.pixabay.com/animation/2022/10/22/02/19/02-19-15-641_512.gif');
        setDescription('Coral is a pink-orange color that gets its name from marine invertebrates decorating the bottom of the sea. It is fresh, invigorating, and feminine.A dynamic and vibrant color, coral is particularly stunning when combined with tiffany blue and white.The color will change over time and it is interesting to see how we change along with it. Keep a journal of how you feel with each color you connect with.');
        break;
      default:
        setImage('https://gifdb.com/images/high/color-pastel-rainbow-lines-xb4joddynqs5zt6u.gif');
        setDescription('Welcome to the interactive color changing landing page.Explore the world of vibrant colors and dwell yourself into aesthetic fonts and textures.');
    }
  };

  const handleFontStyleChange = (style) => {
    setFontStyle(style);
  };

  return (
    <div className="App" style={{ backgroundColor: backgroundColour }}>
      <header>
        <h1>Chroma_Splash</h1>
        <div className="menu-bar">
          <button onClick={() => handleBackgroundChange('white')}>White</button>
          <button onClick={() => handleBackgroundChange('lightblue')}>Light Blue</button>
          <button onClick={() => handleBackgroundChange('lightgreen')}>Light Green</button>
          <button onClick={() => handleBackgroundChange('lightcoral')}>Light Coral</button>
        </div>
      </header>
      <div className="container">
        <div className="sidebar">
          <h2>Font Styles</h2>
          <ul>
            <li onClick={() => handleFontStyleChange('Arial')}>Arial</li>
            <li onClick={() => handleFontStyleChange('Times New Roman')}>Times New Roman</li>
            <li onClick={() => handleFontStyleChange('Verdana')}>Verdana</li>
            <li onClick={() => handleFontStyleChange('Courier New')}>Courier New</li>
          </ul>
        </div>
        <div className="content" style={{ fontFamily: fontStyle }}>
          <img src={image} alt="Description" />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
