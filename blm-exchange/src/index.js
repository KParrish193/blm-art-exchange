import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ArtistContext } from './contexts/ArtistContext';
import { CartContext } from './contexts/CartContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  
  <ArtistContext.Provider>
  <CartContext.Provider>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </CartContext.Provider>
  </ArtistContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
