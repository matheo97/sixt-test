import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
