import styled from 'styled-components';
import colors from '../../styles/colors';
import sizes from '../../styles/sizes';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.primary};
  padding-top: ${sizes.paddingRegular - 5}px;
  padding-left: ${sizes.paddingVerySmall}px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: `${colors.subText}`,
})`
  width: 95%;
  padding: ${sizes.paddingSmall}px;
  border-radius: ${sizes.borderRadiusRegular}px;
  background: ${colors.secondary};
  margin-bottom: ${sizes.marginRegular}px;

  ${({message}) => {
    switch (true) {
      case message:
        return `
            flex: .5;
            `;
    }
  }}
`;

export const TWF = styled.TouchableWithoutFeedback``;

export const Text = styled.Text`
  ${({title, category, item, subItem}) => {
    switch (true) {
      case title:
        return `
            font-size: ${sizes.fontMedium}px;
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
