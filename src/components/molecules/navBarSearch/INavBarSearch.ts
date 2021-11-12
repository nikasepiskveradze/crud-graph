import { ChangeEvent } from 'react';
import { InputEventHandlerType } from '../../../types/events';

export interface INavBarSearch {
  value: string;
  onSearch?: InputEventHandlerType;
}
