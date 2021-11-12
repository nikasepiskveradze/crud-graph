import React from 'react';
import Container from '@mui/material/Container';
import NavigationBar from '../../organisms/naviagtionBar/NavigationBar';
import NavigationDrawer from '../../organisms/navigationDrawer/NavigationDrawer';

const MainLayout: React.FC = (props) => {
  return (
    <>
      <NavigationBar />
      <NavigationDrawer />
      <Container>{props.children}</Container>
    </>
  );
};

export default MainLayout;
