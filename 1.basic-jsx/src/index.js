// 1. Import react && reactDom
import React from 'react';
import ReactDom from 'react-dom';

// 2. Create a react component

const usuario = {
    primerNombre: 'Felipe',
    primerApellido: 'Guio'
  };

  

const App = () => {
return <div>Hola, {usuario.primerNombre} {usuario.primerApellido}</div>;
}      

// 3. Render react
ReactDom.render(
    <App />,
    document.querySelector('#root')
);