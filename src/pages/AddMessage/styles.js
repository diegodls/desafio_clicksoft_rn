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
  color: ${colors.text};
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
  ${({title}) => {
    switch (true) {
      case title:
        return `
            font-size: ${sizes.fontMedium}px;
            font-family: 'MavenPro-Black';
            color: ${colors.text};
            margin-bottom: ${sizes.marginRegular}px;
            `;
    }
  }}
`;
