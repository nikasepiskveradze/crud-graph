import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { INewsItem } from './INews';

const News: React.FC<INewsItem> = (props) => {
  const { item, onEdit } = props;

  return (
    <Card sx={{ maxWidth: 345 }} style={{ marginBottom: 24 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onEdit(item.id)}>
          Edit
        </Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default News;
