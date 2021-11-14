import { useMutation } from '@apollo/client';
import { CREATE_NEWS } from './newsQueries';
import { CreateNews, CreateNewsVars } from './newsTypes';

const useCreateNews = () => {
  return useMutation<CreateNews, CreateNewsVars>(CREATE_NEWS, {
    update(cache, { data }) {
      console.log('cache', cache);
      console.log('data', data);
    },
  });
};

export default useCreateNews;
