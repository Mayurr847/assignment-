import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the updated import for ReactDOM
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// Create the root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
