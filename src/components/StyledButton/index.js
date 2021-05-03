import React from 'react';
import {Container, TWF, Text} from './styles';

export const NegativeButton = ({action, title}) => {
  return (
    <>
      <TWF onPress={action}>
        <Container negative>
          <Text negative>{title}</Text>
        </Container>
      </TWF>
    </>
  );
};

export const NormalButton = ({action, title}) => {
  return (
    <>
      <TWF onPress={action}>
        <Container normal>
          <Text normal>{title}</Text>
        </Container>
      </TWF>
    </>
  );
};

export const PositiveButton = ({action, title}) => {
  return (
    <>
      <TWF onPress={action}>
        <Container positive>
          <Text positive>{title}</Text>
        </Container>
      </TWF>
    </>
  );
};
