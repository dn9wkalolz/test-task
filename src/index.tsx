import React from 'react';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import { rootReducer } from './store/rootReducer';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(),
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root'),
);
