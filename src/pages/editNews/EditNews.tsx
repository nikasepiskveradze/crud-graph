import React from 'react';
import NewsForm from '../../components/organisms/newsForm/NewsForm';
import { Values } from '../../components/organisms/newsForm/INewsForm';
import useGetSingleNews from '../../queries/news/useGetSingleNews';
import { defaultInitialValues } from '../../components/organisms/newsForm/NewsFormValues';
import useUpdateNews from '../../queries/news/useUpdateNews';
import { useNavigate } from 'react-router-dom';
import Routes from '../../constants/routes';

const EditNews: React.FC = () => {
  const navigate = useNavigate();
  const { loading, data } = useGetSingleNews();
  const [updateNews, { loading: isUpdating }] = useUpdateNews();

  const handleSubmit = (values: Values) => {
    updateNews({
      variables: {
        id: Number(values.id),
        input: { title: values.title, body: values.body },
      },
    }).then((updatedNews) => {
      navigate(Routes.ROOT);
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <NewsForm
      initialValues={{ ...defaultInitialValues, ...data?.post }}
      onSubmit={handleSubmit}
      title="Update News"
      clickTitle="Update"
      status={{ loading: isUpdating }}
    />
  );
};

export default EditNews;
