import { ChangeEvent } from 'react';

export type InputEventType = ChangeEvent<HTMLInputElement>;

export type InputEventHandlerType = (event: InputEventType) => void;
