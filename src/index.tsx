import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';

import App from './App';
import reducers from './redux/reducers';
import './sass/index.scss';

const app = document.getElementById('app');
const composeEnhancers = compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app,
);
