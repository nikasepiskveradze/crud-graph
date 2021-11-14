import { useMutation } from '@apollo/client';
import { UPDATE_NEWS } from './newsQueries';
import { IUpdateNews, UpdateNewsVars } from './newsTypes';

const useUpdateNews = () => {
  return useMutation<IUpdateNews, UpdateNewsVars>(UPDATE_NEWS);
};

export default useUpdateNews;
