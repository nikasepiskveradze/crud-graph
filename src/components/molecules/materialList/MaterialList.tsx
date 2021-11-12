import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IMaterialList } from './IMaterialList';

const MaterialList: React.FC<IMaterialList> = (props) => {
  const { list } = props;

  return (
    <List>
      {list.map((text, index) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};

export default MaterialList;
