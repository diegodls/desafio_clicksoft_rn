import React from 'react';

import {useApp} from '../../contexts/app';
import {usePosts} from '../../contexts/posts';

import {IconClose} from '../../components/StyledIcons';

import {NormalButton, NegativeButton} from '../../components/StyledButton';

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
  const {deletePost} = usePosts();

  async function handleDelete() {
    const status = await deletePost();

    if (!status) {
      console.log('Apagou');
      handleCloseModal();
      props.navigation.goBack();
    } else {
      console.log('Não Apagou');
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
        visible={modalState === 'delete'}
        animationType={'fade'}
        transparent={true}>
        <ModalBackground>
          <TWF onPress={handleCloseModal}>
            <OutContainer />
          </TWF>
          <ModalContainer>
            <ModalTitleContainer>
              <Text titleModal>Deseja excluir?</Text>
              <TWF onPress={handleCloseModal}>
                <IconClose />
              </TWF>
            </ModalTitleContainer>
            <ModalMessageContainer>
              <Text messageModal>Esta ação não pode ser desfeita!</Text>
            </ModalMessageContainer>
            <ModalButtonContainer>
              <NormalButton
                type={'normal'}
                title={'Voltar'}
                action={handleCloseModal}
              />
              <NegativeButton
                type={'normal'}
                title={'Excluir'}
                action={handleDelete}
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
