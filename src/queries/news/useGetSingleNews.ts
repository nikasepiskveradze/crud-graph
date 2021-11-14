import { useQuery } from '@apollo/client';
import { GET_SINGLE_NEWS } from './newsQueries';
import { SingleNewsData, SingleNewsVars } from './newsTypes';
import { useParams } from 'react-router-dom';

const useGetSingleNews = () => {
  const { newsId } = useParams();

  return useQuery<SingleNewsData, SingleNewsVars>(GET_SINGLE_NEWS, {
    variables: { postId: newsId },
  });
};

export default useGetSingleNews;
