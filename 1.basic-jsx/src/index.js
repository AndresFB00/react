// 1. Import react && reactDom
import React from 'react';
import ReactDom from 'react-dom';

// 2. Create a react component

function tick() {
    const element = (
      <div>
        <h1>Hola, mundo!</h1>
        <h2>Son las {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDom.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);