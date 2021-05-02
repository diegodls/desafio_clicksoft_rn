import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  CardContainer,
  TitleContainer,
  Avatar,
  TWF,
  Text,
  MessageContainer,
} from './styles';

const CardList = props => {
  const {navigate} = useNavigation();

  const titleLength = 21;

  function handleNavigateAuthor() {
    navigate('User', {userId: props.userId});
  }

  function handleNavigateMessage() {
    navigate('CompletePost', {routePost: props});
  }

  function handleDeleteMessage() {
    props.deletePost(props.id);
  }

  return (
    <>
      <CardContainer>
        <TWF onPress={handleNavigateAuthor}>
          <TitleContainer>
            <Avatar
              source={require('../../../assets/img/blank-profile_64.png')}
            />
            <Text author>{props.author}</Text>
          </TitleContainer>
        </TWF>
        <TWF onPress={handleNavigateMessage}>
          <MessageContainer>
            <Text messageTitle>
              {props.title.substring(0, titleLength)}
              {props.title.length > titleLength ? '...' : ''}
            </Text>
            <Text messageBody>{props.body}</Text>
          </MessageContainer>
        </TWF>
      </CardContainer>
    </>
  );
};

export default CardList;
