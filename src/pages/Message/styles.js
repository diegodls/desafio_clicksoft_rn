import styled from 'styled-components';
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
  padding: ${sizes.paddingSmall}px;
  background-color: ${colors.secondary};
  margin-bottom: ${sizes.marginSmall}px;
  border-radius: ${sizes.marginSmall}px;
`;

export const InfoItem = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: ${sizes.marginRegular}px;
  background-color: ${colors.secondary};
`;

export const TWF = styled.TouchableWithoutFeedback``;

export const Avatar = styled.Image`
  justify-content: center;
  align-items: center;
  margin-bottom: ${sizes.marginSmall}px;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border-width: 2px;
  border-color: ${colors.secondary};
  background-color: ${colors.secondary};
  overflow: hidden;
`;

export const Text = styled.Text`
  ${({name, title, message}) => {
    switch (true) {
      case name:
        return `
            font-size: ${sizes.fontMedium}px;
            font-family: 'MavenPro-Black';
            color: ${colors.text};
            margin-bottom: ${sizes.marginSmall}px;
            `;
      case title:
        return `
            font-size: ${sizes.fontRegular}px;
            font-family: 'MavenPro-Black';
            color: ${colors.subText};
            margin-top: ${sizes.marginSmall}px;
            margin-bottom: ${sizes.marginSmall}px;
            `;
      case message:
        return `
            font-size: ${sizes.fontRegular}px;
            font-family: 'MavenPro-SemiBold';
            color: ${colors.subText};
            `;
    }
  }}
`;
