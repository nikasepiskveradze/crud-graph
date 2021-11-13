import React from 'react';
import MainLayout from '../../components/templates/mainLayout/MainLayout';
import Typography from '@mui/material/Typography';
import { Formik, FormikHelpers } from 'formik';
import { Box, Button } from '@mui/material';
import Input from '../../components/molecules/input/Input';
import { createNewsSchema } from '../../validation/newsSchemas';
import useCreateNews from '../../queries/news/useCreateNews';
import { useNavigate } from 'react-router-dom';
import Routes from '../../constants/routes';

export interface Values {
  title: string;
  body: string;
}

const initialValues: Values = {
  title: '',
  body: '',
};

const AddNews = () => {
  const navigate = useNavigate();

  const [createNews, { loading, error, data }] = useCreateNews({
    input: initialValues,
  });

  const handleSubmit = (
    values: Values,
    { resetForm }: FormikHelpers<Values>
  ) => {
    createNews({ variables: { input: values } }).then((news) => {
      navigate(Routes.ROOT);
    });
  };

  return (
    <MainLayout>
      <Typography fontSize={32}>Create news</Typography>

      <Box mt={2}>
        <Formik
          initialValues={initialValues}
          validationSchema={createNewsSchema}
          onSubmit={handleSubmit}
        >
          {(props) => {
            return (
              <form onSubmit={props.handleSubmit}>
                <Input
                  id="title"
                  label="Title"
                  name="title"
                  variant="outlined"
                  value={props.values.title}
                  error={
                    Boolean(props.errors.title) && Boolean(props.touched.title)
                  }
                  onChange={props.handleChange}
                  fullWidth
                  style={{ marginBottom: 24 }}
                />

                <Input
                  id="body"
                  label="Content"
                  name="body"
                  variant="outlined"
                  value={props.values.body}
                  error={
                    Boolean(props.errors.body) && Boolean(props.touched.body)
                  }
                  onChange={props.handleChange}
                  fullWidth
                  style={{ marginBottom: 24 }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Create'}
                </Button>
              </form>
            );
          }}
        </Formik>
      </Box>
    </MainLayout>
  );
};

export default AddNews;
