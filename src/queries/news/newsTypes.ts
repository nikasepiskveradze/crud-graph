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

export interface CreateNewsVars {
  input: Values;
}

export interface UpdateNewsVars {
  id: number;
  input: Values;
}

export interface ICreateNews {
  createPost: NewsResponse;
}

export interface IUpdateNews {
  updatePost: INews;
}

export interface IDeleteNews {
  deletePost: boolean;
}

export interface DeleteNewsVars {
  id: number;
}
