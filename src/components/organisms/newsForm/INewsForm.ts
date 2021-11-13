import { FormikHelpers } from 'formik';

export interface Values {
  id?: string;
  title: string;
  body: string;
}

export interface INewsForm {
  initialValues: Values;
  onSubmit: (values: Values, actions: FormikHelpers<Values>) => void;
  status?: {
    loading?: boolean;
  };
  title: string;
  clickTitle: string;
}
