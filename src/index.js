import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import jwtDecode from 'jwt-decode';
import { currentUser } from './actions/authActions';
import { store, persistor } from './store';
import App from './App';
import './App.css';
import { setToken } from './utils/axios';

if(localStorage.userJwtToken) {
  setToken(localStorage.userJwtToken);
  const decoded = jwtDecode(localStorage.userJwtToken);
  store.dispatch(currentUser(decoded));
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
