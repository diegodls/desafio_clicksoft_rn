import styled from 'styled-components';
import LottieView from 'lottie-react-native/';
import colors from '../../styles/colors';
import sizes from '../../styles/sizes';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const StyledLottie = styled(LottieView).attrs()`
  width: 50%;
`;

export const MessageContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.pink};
`;

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
