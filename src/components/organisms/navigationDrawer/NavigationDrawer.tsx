import React, { useContext } from 'react';
import MaterialList from '../../molecules/materialList/MaterialList';
import Drawer from '@mui/material/Drawer';
import { GlobalContext, IGlobalContext } from '../../../context/GlobalContext';

const NavigationDrawer: React.FC = () => {
  const { isDrawerOpen, toggleDrawer } =
    useContext<IGlobalContext>(GlobalContext);

  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
      <MaterialList list={['Add news']} />
    </Drawer>
  );
};

export default NavigationDrawer;
