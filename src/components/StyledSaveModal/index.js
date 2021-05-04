import React from 'react';

import {useApp} from '../../contexts/app';
import {usePosts} from '../../contexts/posts';

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
  const {modalState, closeModal, openModalError} = useApp();
  const {savePost} = usePosts();

  async function handleSave() {
    const status = await savePost();

    if (status) {
      handleCloseModal();
      props.navigation.goBack();
    } else {
      handleCloseModal();
      openModalError();
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
