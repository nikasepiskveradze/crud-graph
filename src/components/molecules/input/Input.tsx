import React from 'react';
import { BaseTextFieldProps, TextField } from '@mui/material';
import { useFormikContext } from 'formik';

interface IInput extends BaseTextFieldProps {
  id: string;
  name: string;
  label: string;
}

const Input = (props: IInput) => {
  const { id, label, name, ...rest } = props;
  const { values, errors, touched, handleChange } = useFormikContext<any>();

  return (
    <TextField
      id={id}
      label={label}
      value={values[name]}
      onChange={handleChange}
      error={Boolean(errors.title) && Boolean(touched.title)}
      {...rest}
    />
  );
};

export default Input;
