import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Versiones antiguas a React 18 supuestamente dice el del curso
ReactDOM.render(<App />, document.getElementById('root'));


// no funciona correctamente de la forma actual de React supongo que por las versiones instaladas.

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <div>
//         <h1>Wishlist</h1>
//     </div>
// );