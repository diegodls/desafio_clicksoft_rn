import styled from 'styled-components';
import IconFA from 'react-native-vector-icons/FontAwesome';
import colors from '../../../styles/colors';

export const CardContainer = styled.View`
  width: 100%;
  padding: 10px;
  background-color: ${colors.secondary};
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AuthorContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TWF = styled.TouchableWithoutFeedback``;

export const Avatar = styled.Image`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: 2px;
  border-color: ${colors.secondary};
  background-color: ${colors.primary};
  overflow: hidden;
`;

export const MessageContainer = styled.View``;

export const DeleteIcon = styled(IconFA).attrs({
  name: 'trash-o',
})`
  font-size: 50px;
  color: ${colors.negative};
`;

export const Text = styled.Text`
  ${({author, messageTitle, messageBody, readMore}) => {
    switch (true) {
      case author:
        return `
        font-size: 18px;
        font-family: 'MavenPro-SemiBold';
        padding-left: 10px;
            `;
      case messageTitle:
        return `
        font-size: 20px;
        font-family: 'MavenPro-Bold';
            `;
      case messageBody:
        return `
        font-size: 18px;
        font-family: 'MavenPro-Regular';
            `;
      case readMore:
        return `
        font-size: 18px;
        font-family: 'MavenPro-SemiBold';
        right: 0px;
            `;
    }
  }}
`;
