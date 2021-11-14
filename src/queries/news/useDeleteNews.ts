import { useMutation } from '@apollo/client';
import { DELETE_NEWS } from './newsQueries';
import { DeleteNewsVars, DeleteNews } from './newsTypes';

const useDeleteNews = () => {
  return useMutation<DeleteNews, DeleteNewsVars>(DELETE_NEWS);
};

export default useDeleteNews;
