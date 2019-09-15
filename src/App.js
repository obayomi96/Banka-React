import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={LandingPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
