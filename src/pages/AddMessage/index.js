import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Input, TWF, Text} from './styles';

import {PositiveButton} from '../../components/StyledButton';
import StyledSaveModal from '../../components/StyledSaveModal';
import StyledErrorModal from '../../components/StyledErrorModal';
import {IconBack} from '../../components/StyledIcons';

import {usePosts} from '../../contexts/posts';
import {useApp} from '../../contexts/app';

const AddMessage = () => {
  const navigation = useNavigation();

  const {openModalSave} = useApp();
  const {setPostToSave} = usePosts();

  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);

  function handleBack() {
    navigation.goBack();
  }

  function handleSave() {
    if (!title || !message) {
      setPostToSave({
        userId: Math.floor(Math.random() * (10 - 1 + 1)),
        body: message,
        title: title,
      });
      openModalSave();
    }
  }

  return (
    <>
      <Container>
        <TWF onPress={handleBack}>
          <IconBack small />
        </TWF>
        <Text title>Adicionar Mensagem</Text>
        <Input
          title
          value={title}
          onChangeText={setTitle}
          placeholder="Digite o seu nome"
          autoCorrect={false}
          autoCapitalize={'words'}
        />
        <Input
          message
          value={message}
          onChangeText={setMessage}
          placeholder="Digite sua mensagem"
          autoCorrect={false}
          autoCapitalize={'sentences'}
          multiline={true}
        />
        <TWF onPress={handleSave}>
          <PositiveButton title={'Salvar'} />
        </TWF>
        <StyledSaveModal navigation={navigation} />
        <StyledErrorModal />
      </Container>
    </>
  );
};

export default AddMessage;
