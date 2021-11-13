import React from 'react';
import NewsForm from '../../components/organisms/newsForm/NewsForm';
import { Values } from '../../components/organisms/newsForm/INewsForm';
import useGetSingleNews from '../../queries/news/useGetSingleNews';
import { defaultInitialValues } from '../../components/organisms/newsForm/NewsFormValues';

const EditNews: React.FC = () => {
  const { loading, error, data } = useGetSingleNews();
  const news = data?.post;

  if (loading) return <div>Loading...</div>;

  const handleSubmit = (values: Values) => {
    // Update logic goes here
  };

  return (
    <NewsForm
      initialValues={{ ...defaultInitialValues, ...news }}
      onSubmit={handleSubmit}
      title="Update News"
      clickTitle="Update"
    />
  );
};

export default EditNews;
