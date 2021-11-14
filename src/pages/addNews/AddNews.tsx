import React from 'react';
import useCreateNews from '../../queries/news/useCreateNews';
import { useNavigate } from 'react-router-dom';
import Routes from '../../constants/routes';
import NewsForm from '../../components/organisms/newsForm/NewsForm';
import { Values } from '../../components/organisms/newsForm/INewsForm';
import { defaultInitialValues } from '../../components/organisms/newsForm/NewsFormValues';

const AddNews = () => {
  const navigate = useNavigate();

  const [createNews, { loading }] = useCreateNews({
    input: defaultInitialValues,
  });

  const handleSubmit = (values: Values) => {
    const { id, ...restValues } = values;

    createNews({ variables: { input: restValues } }).then((news) => {
      navigate(Routes.ROOT);
    });
  };

  return (
    <NewsForm
      initialValues={defaultInitialValues}
      onSubmit={handleSubmit}
      status={{ loading }}
      title="Create News"
      clickTitle="Create"
    />
  );
};

export default AddNews;
