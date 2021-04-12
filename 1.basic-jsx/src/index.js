// 1. Import react && reactDom
import React from 'react';
import ReactDom from 'react-dom';

// 2. Create a react component

function Celular(props) {
return <div>
        Componente Celular,
        Sistema Operativo: {props.so}
        Marca: {props.marca}
      </div>
  }
  
 
function Televisor(props) {
  return <div>
              Componente Televisor, 
              Ancho: {props.ancho}
              Alto: {props.alto}
              Resolucion: {props.resolucion}
              Marca: {props.marca}
          </div>;
}

const variableTelevisor = <Televisor ancho="22 pulgadas" alto="22 pulgadas" resolucion="4k" marca="LG"></Televisor>;
const variableCelular = <Celular so="IOs" marca="Iphone"></Celular>;


  
ReactDom.render(
  variableCelular,
  document.getElementById('root')
);