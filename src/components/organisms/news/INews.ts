import { News } from '../../../queries/news/newsTypes';

export type NewsFunctionType = (newsId: string) => void;
export type EditFunctionType = NewsFunctionType;
export type DeleteFunctionType = NewsFunctionType;

export interface INewsItem {
  item: News;
  onEdit: EditFunctionType;
  onDelete: DeleteFunctionType;
}
