import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Routes from './constants/routes';
import Home from './pages/home/Home';
import AddNews from './pages/addNews/AddNews';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path={Routes.ROOT} element={<Home />} />
      <Route path={Routes.ADD_NEWS} element={<AddNews />} />
    </Switch>
  );
};

export default App;
