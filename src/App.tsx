import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Routes from './constants/routes';
import Home from './pages/home/Home';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path={Routes.ROOT} element={<Home />} />
    </Switch>
  );
};

export default App;
