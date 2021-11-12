import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Search from '../../atoms/search/Search';
import SearchIconWrapper from '../../atoms/searchIconWrapper/SearchIconWrapper';
import BaseInput from '../../atoms/baseInput/BaseInput';
import { INavBarSearch } from './INavBarSearch';

const NavBarSearch: React.FC<INavBarSearch> = (props) => {
  const { value, onSearch } = props;

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <BaseInput
        value={value}
        onChange={onSearch}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};

export default NavBarSearch;
