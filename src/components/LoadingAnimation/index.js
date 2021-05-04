import React from 'react';
import {Container, MessageContainer, StyledLottie, Text} from './styles';

const AnimationLoading = props => {
  return (
    <>
      <Container>
        <StyledLottie
          source={require('../../assets/svg/loading.json')}
          autoPlay
          loop
        />
        <MessageContainer>
          {props.message ? <Text message>{props.message}</Text> : null}
        </MessageContainer>
      </Container>
    </>
  );
};

export default AnimationLoading;
