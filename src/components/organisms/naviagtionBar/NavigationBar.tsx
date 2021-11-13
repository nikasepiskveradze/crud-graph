import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import NavBarSearch from '../../molecules/navBarSearch/NavBarSearch';
import { GlobalContext, IGlobalContext } from '../../../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import Routes from '../../../constants/routes';

const NavigationBar = () => {
  const { searchValue, toggleDrawer, handleSearch } =
    useContext<IGlobalContext>(GlobalContext);
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }} mb={2}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(Routes.ROOT)}
          >
            Home
          </Typography>

          <NavBarSearch value={searchValue} onSearch={handleSearch} />
          <Button color="inherit" onClick={() => navigate(Routes.ADD_NEWS)}>
            Add News
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
