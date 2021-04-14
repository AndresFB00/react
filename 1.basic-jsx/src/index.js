// 1. Import react && reactDom
import React from 'react';
import ReactDom from 'react-dom';

// 2. Create a react component


function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.avatar.avatarUrl}
          alt={props.avatar.avatarAlt}
        />
        <div className="UserInfo-name">
          {props.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

var objetoAvatar = {
  avatarUrl: 'https://placekitten.com/g/64/64',
  avatarAlt: 'Imagen de gato blanco'
};



var nombre = "Edison2"; 
var texto = "Le gustan los gatos"; 
var fecha =  new Date(); 
var componenteComentario = <Comment name={nombre}  text={texto} date={fecha} avatar={objetoAvatar}/>;


ReactDom.render(
  componenteComentario,
  document.getElementById('root')
); 

