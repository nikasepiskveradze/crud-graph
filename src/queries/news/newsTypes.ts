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

export interface NewsResponse extends INews {
  __typename: string;
}

export interface ICreateNews {
  createPost: NewsResponse;
}
