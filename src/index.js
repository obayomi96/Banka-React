import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Offline, Online } from "react-detect-offline";
import { store, persistor } from './store';
import App from './App';
import './App.css';

<div>
  <Online>Only shown when you're online</Online>
  <Offline>Only shown offline (surprise!)</Offline>
</div>

import { confirmToken } from './utils';

confirmToken();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
