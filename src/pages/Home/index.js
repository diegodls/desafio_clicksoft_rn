import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {usePosts} from '../../contexts/posts';
import {Container, TopContainer, TWF, Text, PostsList} from './styles';
import {IconAdd} from '../../components/StyledIcons';
import CardList from './CardList';
const Home = () => {
  const {navigate} = useNavigation();

  const {
    mergedData,
    loadingData,
    apiError,
    apiErrorMessage,
    loadAndMergePosts,
  } = usePosts();

  function handleAddMessage() {
    navigate('AddMessage');
  }

  useEffect(() => {
    loadAndMergePosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <TopContainer>
        <Text>Mensagens</Text>
        <TWF onPress={handleAddMessage}>
          <IconAdd large />
        </TWF>
      </TopContainer>
      {loadingData ? (
        <Text>Carregando...</Text>
      ) : apiError ? (
        <Text>{apiErrorMessage}</Text>
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
