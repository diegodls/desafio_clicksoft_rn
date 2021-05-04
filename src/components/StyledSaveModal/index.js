import React from 'react';

import {useApp} from '../../contexts/app';
import {useApi} from '../../contexts/api';

import {IconClose} from '../StyledIcons';

import {NormalButton, PositiveButton} from '../StyledButton';

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

const StyledModal = props => {
  const {
    modalState,
    modalTitle,
    modalMessage,
    closeModal,
    openModalError,
  } = useApp();
  const {savePost} = useApi();

  async function handleSave() {
    const status = await savePost();

    if (status) {
      handleCloseModal();
      openModalError('Sucesso!', 'Sua mensagem foi salva');
      props.clearInput();
    } else {
      handleCloseModal();
      openModalError(
        'Erro!',
        'Erro ao salvar sua mensagem! Tente novamente mais tarde',
      );
    }
  }

  function handleCloseModal() {
    closeModal();
  }

  return (
    <>
      <Modal
        visible={modalState === 'save'}
        animationType={'fade'}
        transparent={true}>
        <ModalBackground>
          <TWF onPress={handleCloseModal}>
            <OutContainer />
          </TWF>
          <ModalContainer>
            <ModalTitleContainer>
              <Text titleModal>Deseja Salvar?</Text>
              <TWF onPress={handleCloseModal}>
                <IconClose />
              </TWF>
            </ModalTitleContainer>
            <ModalMessageContainer>
              <Text messageModal>Deseja salvar esta mensagem?</Text>
            </ModalMessageContainer>
            <ModalButtonContainer>
              <NormalButton
                type={'normal'}
                title={'Voltar'}
                action={handleCloseModal}
              />
              <PositiveButton
                type={'normal'}
                title={'Salvar'}
                action={handleSave}
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

export default StyledModal;
