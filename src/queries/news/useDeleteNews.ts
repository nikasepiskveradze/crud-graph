import { useMutation } from '@apollo/client';
import { DELETE_NEWS } from './newsQueries';
import { DeleteNewsVars, IDeleteNews } from './newsTypes';

const useDeleteNews = () => {
  return useMutation<IDeleteNews, DeleteNewsVars>(DELETE_NEWS);
};

export default useDeleteNews;
