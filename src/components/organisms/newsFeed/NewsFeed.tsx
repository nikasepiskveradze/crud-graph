import React, { useContext } from 'react';
import News from '../news/News';
import Grid from '@mui/material/Grid';
import useGetNews from '../../../queries/news/useGetNews';
import { GlobalContext, IGlobalContext } from '../../../context/GlobalContext';
import Routes from '../../../constants/routes';
import { useNavigate } from 'react-router-dom';
import { DeleteFunctionType, EditFunctionType } from '../news/INews';
import useDeleteNews from '../../../queries/news/useDeleteNews';

const NewsFeed = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useGetNews();
  const { searchValue } = useContext<IGlobalContext>(GlobalContext);
  const [deleteNews] = useDeleteNews();

  const posts = data
    ? data.posts.data.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  const handleEdit: EditFunctionType = (newsId) => {
    navigate(Routes.EDIT_NEWS.replace(':newsId', newsId));
  };

  const handleDelete: DeleteFunctionType = (newsId) => {
    deleteNews({
      variables: { id: Number(newsId) },
    }).then((response) => {
      // console.log('deleted', response);
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <Grid container justifyContent="space-evenly">
      {posts.map((newsItem) => (
        <News
          key={newsItem.id}
          item={newsItem}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </Grid>
  );
};

export default NewsFeed;
