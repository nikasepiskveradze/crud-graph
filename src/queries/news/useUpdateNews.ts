import { useMutation } from '@apollo/client';
import { UPDATE_NEWS } from './newsQueries';
import { UpdateNews, UpdateNewsVars } from './newsTypes';

const useUpdateNews = () => {
  return useMutation<UpdateNews, UpdateNewsVars>(UPDATE_NEWS);
};

export default useUpdateNews;
