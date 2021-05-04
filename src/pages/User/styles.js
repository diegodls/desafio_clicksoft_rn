import styled from 'styled-components';
import IconFA from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import sizes from '../../styles/sizes';

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
  padding-top: ${sizes.paddingSmall}px;
`;

export const InfoContainer = styled.View`
  width: 90%;
`;

export const InfoItem = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: ${sizes.marginRegular}px;

`;

export const TWF = styled.TouchableWithoutFeedback``;

export const IconBack = styled(IconFA)`
  padding: ${sizes.paddingRegular}px;
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
`;

export const Avatar = styled.Image`
  justify-content: center;
  align-items: center;
  margin-bottom: ${sizes.marginRegular}px;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border-width: 2px;
  border-color: ${colors.secondary};
  background-color: ${colors.secondary};
  overflow: hidden;
`;

export const Text = styled.Text`
  ${({name, category, item, subItem}) => {
    switch (true) {
      case name:
        return `
            font-size: ${sizes.fontMedium}px;
            font-family: 'MavenPro-Black';
            color: ${colors.text};
            margin-bottom: ${sizes.marginRegular}px;
            `;
      case category:
        return `
            font-size: ${sizes.fontRegular}px;
            font-family: 'MavenPro-Black';
            color: ${colors.subText};
            margin-top: ${sizes.marginRegular}px;
            margin-bottom: ${sizes.marginRegular}px;
            `;
      case item:
        return `
            font-size: ${sizes.fontRegular - 5}px;
            font-family: 'MavenPro-Regular';
            color: ${colors.text};
            `;
      case subItem:
        return `
            font-size: ${sizes.fontRegular}px;
            font-family: 'MavenPro-SemiBold';
            color: ${colors.subText};
            `;
    }
  }}
`;
