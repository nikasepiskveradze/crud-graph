import { Values } from '../../components/organisms/newsForm/INewsForm';

export interface INews {
  id: string;
  title: string;
  body: string;
}

export interface NewsFeedData {
  posts: {
    data: INews[];
  };
}

export interface SingleNewsData {
  post: Values;
}

export interface SingleNewsDataVars {
  postId?: string;
}

export interface NewsResponse extends INews {
  __typename: string;
}

export interface ICreateNews {
  createPost: NewsResponse;
}
