import React, {useEffect, useContext} from 'react';

import PostContext from '../../contexts/posts';

import {Container, PageTitle, PostsList} from './styles';

import CardList from './CardList';

const Home = () => {
  const {
    mergedData,
    loadingData,
    apiError,
    apiErrorMessage,
    loadAndMergePosts,
  } = useContext(PostContext);

  useEffect(() => {
    console.log('useEffect');
    console.log(
      `List - mergedData = ${mergedData ? mergedData.length : mergedData}`,
    );

    loadAndMergePosts();

    // desabilitado devido a não necessitar de dependências
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
