import { useQuery } from '@apollo/client';
import { GET_ALL_NEWS } from './newsQueries';
import { NewsData } from './newsTypes';

const useGetNews = () => {
  return useQuery<NewsData>(GET_ALL_NEWS);
};

export default useGetNews;
