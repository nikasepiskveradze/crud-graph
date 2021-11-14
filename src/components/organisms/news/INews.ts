import { INews } from '../../../queries/news/newsTypes';

export type NewsFunctionType = (newsId: string) => void;
export type EditFunctionType = NewsFunctionType;
export type DeleteFunctionType = NewsFunctionType;

export interface INewsItem {
  item: INews;
  onEdit: EditFunctionType;
  onDelete: DeleteFunctionType;
}
