import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  CardContainer,
  HeaderContainer,
  AuthorContainer,
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
    navigate('Message', {routePost: props});
  }

  return (
    <>
      <CardContainer>
        <HeaderContainer>
          <TWF onPress={handleNavigateAuthor}>
            <AuthorContainer>
              <Avatar
                source={require('../../../assets/img/blank-profile_64.png')}
              />
              <Text author>{props.author}</Text>
            </AuthorContainer>
          </TWF>
        </HeaderContainer>
        <TWF onPress={handleNavigateMessage}>
          <MessageContainer>
            <Text messageTitle>
              {props.title.substring(0, titleLength)}
              {props.title.length > titleLength ? '...' : ''}
            </Text>
            <Text messageBody>{props.body} </Text>
            <Text readMore>Leia Mais </Text>
          </MessageContainer>
        </TWF>
      </CardContainer>
    </>
  );
};

export default CardList;
