import styled from 'styled-components';
import colors from '../../styles/colors';
import sizes from '../../styles/sizes';

export const Container = styled.View`
  background-color: ${colors.primary};
  padding: ${sizes.paddingSmall}px;
  border-radius: ${sizes.borderRadiusRegular}px;

  ${({negative, normal}) => {
    switch (true) {
      case negative:
        return `
        background-color: ${colors.negative};
            `;
      case normal:
        return `
        border-width: 1px;
        border-color: ${colors.border};
            `;
    }
  }}
`;

export const TWF = styled.TouchableWithoutFeedback``;

export const Text = styled.Text`
  font-size: ${sizes.fontMedium}px;
  font-family: 'MavenPro-Bold';

  ${({negative, normal}) => {
    switch (true) {
      case negative:
        return `
        color: ${colors.primary};
            `;
      case normal:
        return `   
        color: ${colors.text};
            `;
    }
  }}
`;
