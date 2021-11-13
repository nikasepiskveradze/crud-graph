import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Routes from './constants/routes';
import Home from './pages/home/Home';
import AddNews from './pages/addNews/AddNews';
import EditNews from './pages/editNews/EditNews';
import MainLayout from './components/templates/mainLayout/MainLayout';

const App: React.FC = () => {
  return (
    <Switch>
      <Route
        path={Routes.ROOT}
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path={Routes.ADD_NEWS}
        element={
          <MainLayout>
            <AddNews />
          </MainLayout>
        }
      />
      <Route
        path={Routes.EDIT_NEWS}
        element={
          <MainLayout>
            <EditNews />
          </MainLayout>
        }
      />
    </Switch>
  );
};

export default App;
