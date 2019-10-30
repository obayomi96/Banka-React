import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { currentUser } from './actions/authActions';
import store from './store';
import App from './App';
import './App.css';
import { setToken } from './utils/axios';

if(localStorage.userJwtToken) {
  setToken(localStorage.userJwtToken);
  const decoded = jwtDecode(localStorage.userJwtToken);
  store.dispatch(currentUser(decoded));
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
