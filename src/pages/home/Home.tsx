import React from 'react';
import MainLayout from '../../components/templates/mainLayout/MainLayout';
import NewsFeed from '../../components/organisms/newsFeed/NewsFeed';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <NewsFeed />
    </MainLayout>
  );
};

export default Home;
