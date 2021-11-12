import React from 'react';
import MainLayout from '../../components/templates/mainLayout/MainLayout';
import Typography from '@mui/material/Typography';
import { Formik, FormikHelpers } from 'formik';
import { Box, Button } from '@mui/material';
import Input from '../../components/molecules/input/Input';

interface Values {
  title: string;
  content: string;
  description: string;
  author: string;
}

const initialValues: Values = {
  title: '',
  content: '',
  description: '',
  author: '',
};

const AddNews = () => {
  const handleSubmit = (
    values: Values,
    { resetForm }: FormikHelpers<Values>
  ) => {};

  return (
    <MainLayout>
      <Typography fontSize={32}>Create news</Typography>

      <Box mt={2}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {(props) => {
            return (
              <form onSubmit={props.handleSubmit}>
                <Input
                  id="title"
                  label="Title"
                  name="title"
                  variant="outlined"
                  value={props.values.title}
                  error={Boolean(props.errors.title)}
                  onChange={props.handleChange}
                  fullWidth
                  style={{ marginBottom: 24 }}
                />

                {/*<Input*/}
                {/*  id="title"*/}
                {/*  label="Title"*/}
                {/*  name="title"*/}
                {/*  variant="outlined"*/}
                {/*  fullWidth*/}
                {/*  style={{ marginBottom: 24 }}*/}
                {/*/>*/}

                {/*<Input*/}
                {/*  id="title"*/}
                {/*  label="Title"*/}
                {/*  name="title"*/}
                {/*  variant="outlined"*/}
                {/*  fullWidth*/}
                {/*  style={{ marginBottom: 24 }}*/}
                {/*/>*/}

                {/*<Input*/}
                {/*  id="title"*/}
                {/*  label="Title"*/}
                {/*  name="title"*/}
                {/*  variant="outlined"*/}
                {/*  fullWidth*/}
                {/*  style={{ marginBottom: 24 }}*/}
                {/*/>*/}

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                >
                  Create
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
