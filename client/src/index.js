import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Use createRoot to render your app
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
    <App classname='bg-gray-800'/>
    </Router>
  </Provider>
);