import React from 'react';
import { Formik } from 'formik';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { createNewsSchema } from '../../../validation/newsSchemas';
import Input from '../../molecules/input/Input';
import { INewsForm } from './INewsForm';

const NewsForm: React.FC<INewsForm> = (props) => {
  const { initialValues, onSubmit, status, title, clickTitle } = props;
  const loading = status?.loading;

  return (
    <>
      <Typography fontSize={32}>{title}</Typography>

      <Box mt={2}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={createNewsSchema}
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
                  {loading ? 'Loading...' : clickTitle}
                </Button>
              </form>
            );
          }}
        </Formik>
      </Box>
    </>
  );
};

export default NewsForm;
