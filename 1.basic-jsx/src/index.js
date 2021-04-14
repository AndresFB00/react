// 1. Import react && reactDom
import React from 'react';
import ReactDom from 'react-dom';

// 2. Create a react component


function formatoFecha(fecha) {
  return fecha.toLocaleDateString();
}

function Comentario(props) {
  return (
    <div claseNombre="Comentario">
      <div claseNombre="UsuarioInfo">
        <img claseNombre="Avatar"
          src={props.autor.avatarUrl}
          alt={props.autor.nombre}
        />
        <div claseNombre="UsuarioInfo-nombre">
          {props.autor.nombre}
        </div>
      </div>
      <div claseNombre="Comentario-texto">{props.texto}</div>
      <div claseNombre="Comentario-date">
        {formatoFecha(props.fecha)}
      </div>
    </div>
  );
}


const comentario = {
  fecha: new Date(),
  texto: 'Aprendiendo react :)',
  autor:{
     nombre: 'Hola pequeño gatito',
     avatarUrl: 'https://placekitten.com/g/64/64',
},
};
ReactDom.render(
  <Comentario
    fecha={comentario.fecha} texto={comentario.texto} autor={comentario.autor} 
  />,
  document.getElementById('root')
); 
 

