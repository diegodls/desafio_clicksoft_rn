import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {usePosts} from '../../contexts/posts';
import {Container, TopContainer, TWF, Text, PostsList} from './styles';
import {IconAdd} from '../../components/StyledIcons';
import LoadingAnimation from '../../components/LoadingAnimation';
import ErrorAnimation from '../../components/ErrorAnimation';
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
        {!loadingData && !apiError ? (
          <TWF onPress={handleAddMessage}>
            <IconAdd large />
          </TWF>
        ) : null}
      </TopContainer>
      {loadingData ? (
        <LoadingAnimation message={'Carregando mensagens'} />
      ) : apiError ? (
        <ErrorAnimation message={apiErrorMessage} />
      ) : (
        <PostsList
          data={mergedData}
          keyExtractor={item => String(item.id)}
          initialNumToRender={10}
          windowSize={5}
          maxToRenderPerBatch={5}
          updateCellsBatchingPeriod={30}
          removeClippedSubviews={false}
          onEndReachedThreshold={0.1}
          renderItem={({item}) => <CardList {...item} />}
        />
      )}
    </Container>
  );
};

export default Home;
