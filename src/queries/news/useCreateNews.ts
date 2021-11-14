import { useMutation } from '@apollo/client';
import { CREATE_NEWS } from './newsQueries';
import { CreateNewsVars, ICreateNews } from './newsTypes';

const useCreateNews = (newsValues: CreateNewsVars) => {
  return useMutation<ICreateNews, CreateNewsVars>(CREATE_NEWS, {
    variables: newsValues,
    update(cache, { data }) {
      console.log('cache', cache);
      console.log('data', data);
    },
  });
};

export default useCreateNews;
