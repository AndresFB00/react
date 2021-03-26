// 1. Import react && reactDom
import React from 'react';
import ReactDom from 'react-dom';

// 2. Create a react component

var name = 'Felipe Guio';

const App = () => {
return <div>{name}</div>;
}      

// 3. Render react
ReactDom.render(
    <App />,
    document.querySelector('#root')
);