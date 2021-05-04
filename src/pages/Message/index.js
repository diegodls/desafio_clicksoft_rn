import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {usePosts} from '../../contexts/posts';
import {useApp} from '../../contexts/app';

import {IconBack, IconDelete} from '../../components/StyledIcons';

import StyledDeleteModal from '../../components/StyledDeleteModal';
import StyledErrorModal from '../../components/StyledErrorModal';

import {
  Container,
  ScrollContainer,
  InfoContainer,
  InfoItem,
  Text,
  TWF,
  Avatar,
} from './styles';

const Message = ({route}) => {
  const navigation = useNavigation();
  const {routePost} = route.params;
  
  const {openModalDelete} = useApp();
  const {setIdToDelete} = usePosts();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function handleBack() {
    navigation.goBack();
  }

  function handleDeleteMessage() {
    setIdToDelete(routePost.id);
    openModalDelete();
  }

  useEffect(() => {
    setLoading(true);
    if (routePost) {
      setPost(routePost);
      setLoading(false);
    } else {
      setError(true);
    }
  }, [routePost]);

  return (
    <>
      <Container>
        {loading ? (
          <Text>Carregando</Text>
        ) : (
          <>
            <TWF onPress={handleBack}>
              <IconBack small />
            </TWF>
            <ScrollContainer>
              <Avatar
                source={require('../../assets/img/blank-profile_502.png')}
              />
              <Text name>{post.author}</Text>
              <InfoContainer>
                <Text category>{post.title}</Text>
                <InfoItem>
                  <Text subItem>{post.body}</Text>
                </InfoItem>
              </InfoContainer>
              <TWF onPress={handleDeleteMessage}>
                <IconDelete small />
              </TWF>
            </ScrollContainer>
          </>
        )}
        <StyledDeleteModal navigation={navigation} />
        <StyledErrorModal />
      </Container>
    </>
  );
};

export default Message;
