import styled from 'styled-components';
import IconFA from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
`;

export const ScrollContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  flex: 1;
  width: 100%;
  background-color: ${colors.primary};
  padding-top: 10px;
`;

export const InfoContainer = styled.View`
  width: 90%;
  background-color: ${colors.positive};
`;

export const InfoItem = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: ${colors.negative};
`;

export const TWF = styled.TouchableWithoutFeedback``;

export const IconBack = styled(IconFA)`
  padding: 20px;
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
`;

export const Avatar = styled.Image`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border-width: 2px;
  border-color: ${colors.secondary};
  background-color: ${colors.negative};
  overflow: hidden;
`;

export const Text = styled.Text`
  ${({name, category, item, subItem}) => {
    switch (true) {
      case name:
        return `
            font-size: 25px;
            font-family: 'MavenPro-Black';
            color: ${colors.text};
            margin-bottom: 20px;
            `;
      case category:
        return `
            font-size: 20px;
            font-family: 'MavenPro-Black';
            color: ${colors.subText};
            margin-top: 20px;
            margin-bottom: 20px;
            `;
      case item:
        return `
            font-size: 14px;
            font-family: 'MavenPro-Regular';
            color: ${colors.text};
            `;
      case subItem:
        return `
            font-size: 18px;
            font-family: 'MavenPro-SemiBold';
            color: ${colors.subText};
            `;
    }
  }}
`;
