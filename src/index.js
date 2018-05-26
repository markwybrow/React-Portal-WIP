import './index.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

import { Provider, connect } from 'react-redux';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

// import { store } from './store';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);

