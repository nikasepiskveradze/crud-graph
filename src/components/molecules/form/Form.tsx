import { Formik, FormikConfig } from 'formik';
import React from 'react';

const Form = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  ...rest
}: FormikConfig<any>) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...rest}
    >
      {(props) => <form onSubmit={props.handleSubmit}>{children}</form>}
    </Formik>
  );
};

export default Form;
