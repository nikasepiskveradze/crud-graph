export interface InputNews {
  title: string;
  body: string;
}

export interface News extends InputNews {
  id: string;
}

export interface NewsData {
  posts: {
    data: News[];
  };
}

export interface SingleNewsData {
  post: News;
}

export interface SingleNewsVars {
  postId?: string;
}

export interface CreateNews {
  createPost: News;
}

export interface CreateNewsVars {
  input: InputNews;
}

export interface UpdateNews {
  updatePost: News;
}

export interface UpdateNewsVars {
  id: number;
  input: InputNews;
}

export interface DeleteNews {
  deletePost: boolean;
}

export interface DeleteNewsVars {
  id: number;
}
