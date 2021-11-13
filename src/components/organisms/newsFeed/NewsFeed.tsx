import React, { useContext } from 'react';
import News from '../news/News';
import Grid from '@mui/material/Grid';
import useGetNews from '../../../queries/news/useGetNews';
import { GlobalContext, IGlobalContext } from '../../../context/GlobalContext';
import Routes from '../../../constants/routes';
import { useNavigate } from 'react-router-dom';
import { EditFunctionType } from '../news/INews';

const NewsFeed = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useGetNews();
  const { searchValue } = useContext<IGlobalContext>(GlobalContext);

  const posts = data
    ? data.posts.data.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const handleEdit: EditFunctionType = (newsId) => {
    navigate(Routes.EDIT_NEWS.replace(':newsId', newsId));
  };

  return (
    <Grid container justifyContent="space-evenly">
      {posts.map((newsItem) => (
        <News key={newsItem.id} item={newsItem} onEdit={handleEdit} />
      ))}
    </Grid>
  );
};

export default NewsFeed;
