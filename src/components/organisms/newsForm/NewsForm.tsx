import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { createNewsSchema } from '../../../validation/newsSchemas';
import Input from '../../molecules/input/Input';
import { INewsForm } from './INewsForm';
import Form from '../../molecules/form/Form';

const NewsForm: React.FC<INewsForm> = (props) => {
  const { initialValues, onSubmit, status, title, clickTitle } = props;
  const loading = status?.loading;

  return (
    <>
      <Typography fontSize={32}>{title}</Typography>

      <Box mt={2}>
        <Form
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={createNewsSchema}
        >
          <Input
            id="title"
            label="Title"
            name="title"
            variant="outlined"
            fullWidth
            style={{ marginBottom: 24 }}
          />

          <Input
            id="body"
            label="Content"
            name="body"
            variant="outlined"
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
        </Form>
      </Box>
    </>
  );
};

export default NewsForm;
