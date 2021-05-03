import React, {useEffect} from 'react';
import {usePosts} from '../../contexts/posts';
import {Container, PageTitle, PostsList} from './styles';
import CardList from './CardList';

const Home = () => {
  const {
    mergedData,
    loadingData,
    apiError,
    apiErrorMessage,
    loadAndMergePosts,
  } = usePosts();

  useEffect(() => {
    loadAndMergePosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <PageTitle>Mensagens</PageTitle>
      {loadingData ? (
        <PageTitle>Carregando...</PageTitle>
      ) : apiError ? (
        <PageTitle>{apiErrorMessage}</PageTitle>
      ) : (
        <PostsList
          data={mergedData}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <CardList {...item} />}
        />
      )}
    </Container>
  );
};

export default Home;
