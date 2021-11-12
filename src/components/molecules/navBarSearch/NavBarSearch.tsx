import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Search from '../../atoms/search/Search';
import SearchIconWrapper from '../../atoms/searchIconWrapper/SearchIconWrapper';
import BaseInput from '../../atoms/baseInput/BaseInput';

const NavBarSearch = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <BaseInput
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};

export default NavBarSearch;
