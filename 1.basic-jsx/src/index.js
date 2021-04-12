// 1. Import react && reactDom
import React from 'react';
import ReactDom from 'react-dom';

// 2. Create a react component


function Bienvenido(props) {
return <h1>
        buenas,: {props.nombre}      
      </h1>
  }
  
 
function Apli() {
  return (
        <div>
      <Bienvenido nombre="Sara" />
      <Bienvenido nombre="Cahal" />
      <Bienvenido nombre="Edite" />
          </div>
        );
}


ReactDom.render(
  <Apli />,
  document.getElementById('root')
); 

