import styled from 'styled-components';
import colors from '../../styles/colors';
import sizes from '../../styles/sizes';

export const Modal = styled.Modal``;

export const TWF = styled.TouchableWithoutFeedback``;

export const ModalBackground = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.dark_opacity};
`;

export const ModalContainer = styled.View`
  width: 95%;
  background-color: ${colors.primary};
  padding: ${sizes.paddingRegular}px;
  border-radius: ${sizes.borderRadiusRegular}px;
`;

export const OutContainer = styled.View`
  width: 95%;
  flex: 1;
`;

export const ModalTitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalMessageContainer = styled.View`
  width: 100%;
  margin-bottom: ${sizes.marginRegular}px;
  margin-top: ${sizes.marginRegular}px;
`;

export const ModalButtonContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: ${sizes.marginRegular}px;
`;

export const Text = styled.Text`
  ${({titleModal, messageModal}) => {
    switch (true) {
      case titleModal:
        return `
        font-size: ${sizes.fontMedium}px;
        font-family: 'MavenPro-Bold';
            `;
      case messageModal:
        return `
        font-size: ${sizes.fontRegular}px;
        font-family: 'MavenPro-Regular';
            `;
    }
  }}
`;
