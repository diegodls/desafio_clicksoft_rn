import styled from 'styled-components';
import IconFA from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import sizes from '../styles/sizes';

export const IconDelete = styled(IconFA).attrs({
  name: 'trash-o',
})`
  font-size: ${sizes.medium}px;
  color: ${colors.negative};

  ${({medium}) => {
    switch (true) {
      case medium:
        return `
        font-size: ${sizes.medium}px;
        color: ${colors.negative};
            `;
    }
  }}
`;

export const IconAdd = styled(IconFA).attrs({
  name: 'plus-circle',
})`
  font-size: ${sizes.medium}px;
  color: ${colors.text};

  ${({medium, large}) => {
    switch (true) {
      case medium:
        return `
        font-size: ${sizes.medium}px;        
            `;
      case large:
        return `
        font-size: ${sizes.large}px;        
            `;
    }
  }}
`;

export const IconBack = styled(IconFA).attrs({
  name: 'chevron-left',
})`
  font-size: ${sizes.small}px;
  color: ${colors.text};
  padding: ${sizes.paddingRegular}px;
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;

  ${({small}) => {
    switch (true) {
      case small:
        return `
        font-size: ${sizes.small}px;
        color: ${colors.text};
            `;
    }
  }}
`;

export const IconClose = styled(IconFA).attrs({
  name: 'close',
})`
  font-size: ${sizes.small}px;
  color: ${colors.text};
  ${({small}) => {
    switch (true) {
      case small:
        return `
        font-size: ${sizes.small}px;
        color: ${colors.text};
            `;
    }
  }}
`;
