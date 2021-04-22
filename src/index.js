import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer } from './store';

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
<Provider store={store}>
  <App />   
</Provider>
, document.getElementById('root')
);

reportWebVitals();
