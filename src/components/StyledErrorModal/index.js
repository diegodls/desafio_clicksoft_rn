import React from 'react';

import {useApp} from '../../contexts/app';

import {IconClose} from '../StyledIcons';

import {NormalButton} from '../StyledButton';

import {
  Modal,
  TWF,
  OutContainer,
  ModalBackground,
  ModalContainer,
  ModalTitleContainer,
  ModalMessageContainer,
  ModalButtonContainer,
  Text,
} from './styles';

const StyledErrorModal = props => {
  const {modalState, modalErrorTitle, modalErrorMessage, closeModal} = useApp();

  function handleCloseModal() {
    closeModal();
  }

  return (
    <>
      <Modal
        visible={modalState === 'error'}
        animationType={'fade'}
        transparent={true}>
        <ModalBackground>
          <TWF onPress={handleCloseModal}>
            <OutContainer />
          </TWF>
          <ModalContainer>
            <ModalTitleContainer>
              <Text titleModal>{modalErrorTitle}</Text>
              <TWF onPress={handleCloseModal}>
                <IconClose />
              </TWF>
            </ModalTitleContainer>
            <ModalMessageContainer>
              <Text messageModal>{modalErrorMessage}</Text>
            </ModalMessageContainer>
            <ModalButtonContainer>
              <NormalButton
                type={'normal'}
                title={'Voltar'}
                action={handleCloseModal}
              />
            </ModalButtonContainer>
          </ModalContainer>
          <TWF onPress={handleCloseModal}>
            <OutContainer />
          </TWF>
        </ModalBackground>
      </Modal>
    </>
  );
};

export default StyledErrorModal;
