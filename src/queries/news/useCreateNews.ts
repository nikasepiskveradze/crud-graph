import { useMutation } from '@apollo/client';
import { CREATE_NEWS } from './newsQueries';
import { ICreateNews } from './newsTypes';
import { Values } from '../../components/organisms/newsForm/INewsForm';

interface CreateNewsVars {
  input: Values;
}

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
