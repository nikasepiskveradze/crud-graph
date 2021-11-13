import { INews } from '../../../queries/news/newsTypes';

export type EditFunctionType = (newsId: string) => void;

export interface INewsItem {
  item: INews;
  onEdit: EditFunctionType;
}
