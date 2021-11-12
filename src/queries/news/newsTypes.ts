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
