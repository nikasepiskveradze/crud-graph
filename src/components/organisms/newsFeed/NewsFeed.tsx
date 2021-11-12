import React from 'react';
import News from '../news/News';
import Grid from '@mui/material/Grid';

const NewsFeed: React.FC = () => {
  return (
    <Grid container justifyContent="space-evenly">
      {[1, 2, 3, 4, 5, 6, 7].map((newsItem) => (
        <News key={newsItem} />
      ))}
    </Grid>
  );
};

export default NewsFeed;
