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

  const {openModalSave, openModalError} = useApp();
  const {setPostToSave} = usePosts();

  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);

  function handleBack() {
    navigation.goBack();
  }

  function clearInputs() {
    setTitle(null);
    setMessage(null);
  }

  function handleSave() {
    if (title && message) {
      setPostToSave({
        userId: Math.floor(Math.random() * 10) + 1, //aleatório devido a falta de login, cujo não foi requisitado
        id: Math.floor(Math.random() * 1000) + 100, //aleatório devido a api retornar sem id: 101 terminado em erro na lista
        body: message,
        title: title,
      });
      openModalSave();
    } else {
      openModalError('Erro!', 'Preencha os campos vazios!');
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
          placeholder="Digite o titulo"
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
        <PositiveButton title={'Salvar'} action={handleSave} />
        <StyledSaveModal navigation={navigation} clearInput={clearInputs} />
        <StyledErrorModal />
      </Container>
    </>
  );
};

export default AddMessage;
