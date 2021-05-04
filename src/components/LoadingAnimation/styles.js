import styled from 'styled-components';
import LottieView from 'lottie-react-native/';
import colors from '../../styles/colors';
import sizes from '../../styles/sizes';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`;

export const LottieContainer = styled.View``;

export const StyledLottie = styled(LottieView).attrs()`
  width: 50%;
`;

export const MessageContainer = styled.View``;

export const Text = styled.Text`
  ${({message}) => {
    switch (true) {
      case message:
        return `
        font-size: ${sizes.fontMedium}px;    
        color: ${colors.text};    
            `;
    }
  }}
`;
