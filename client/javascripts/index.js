import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'; // React-semantic style import.

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));
  
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('app')
);