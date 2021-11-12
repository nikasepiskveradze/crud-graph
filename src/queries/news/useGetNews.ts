import { useQuery } from '@apollo/client';
import { GET_ALL_NEWS } from './newsQueries';
import { NewsFeedData } from './newsTypes';

const useGetNews = () => {
  return useQuery<NewsFeedData>(GET_ALL_NEWS);
};

export default useGetNews;
