import React from 'react';
import {Container, MessageContainer, StyledLottie, Text} from './styles';

const AnimationLoading = props => {
  return (
    <>
      <Container>
        <StyledLottie
          source={require('../../assets/svg/error.json')}
          autoPlay
          loop
        />
        {props.message ? <Text message>{props.message}</Text> : null}
      </Container>
    </>
  );
};

export default AnimationLoading;
