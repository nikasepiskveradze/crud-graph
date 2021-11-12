import React, { ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { BaseTextFieldProps } from '@mui/material/TextField/TextField';

interface IInput extends BaseTextFieldProps {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = (props) => {
  const { id, label, ...rest } = props;

  return <TextField id={id} label={label} {...rest} />;
};

export default Input;
