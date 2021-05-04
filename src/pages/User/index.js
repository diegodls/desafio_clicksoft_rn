import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useApi} from '../../contexts/api';

import LoadingAnimation from '../../components/LoadingAnimation';
import ErrorAnimation from '../../components/ErrorAnimation';

import {
  Container,
  ScrollContainer,
  InfoContainer,
  InfoItem,
  Text,
  IconBack,
  TWF,
  Avatar,
} from './styles';

const User = ({route}) => {
  const navigation = useNavigation();
  const {userId} = route.params;

  const [apiUserLoaded, setApiUserLoaded] = useState(null);

  const {loadingData, apiError, loadUserApi} = useApi();

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function loadUser() {
      const tempUser = await loadUserApi(userId);

      if (tempUser) {
        setApiUserLoaded(tempUser);
      }
    }
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <>
      <Container>
        <TWF onPress={handleBack}>
          <IconBack name={'chevron-left'} size={25} />
        </TWF>
        {loadingData ? (
          <LoadingAnimation message={'Carregando usuário'} />
        ) : apiError ? (
          <ErrorAnimation message={'Erro ao buscar usuário'} />
        ) : apiUserLoaded ? (
          <>
            <ScrollContainer>
              <Avatar
                source={require('../../assets/img/blank-profile_502.png')}
              />
              <Text name>{apiUserLoaded.name}</Text>
              <InfoContainer>
                <Text category>Informações Pessoais</Text>
                <InfoItem>
                  <Text item>Nickname</Text>
                  <Text subItem>{apiUserLoaded.username}</Text>
                </InfoItem>
                <InfoItem>
                  <Text item>Email</Text>
                  <Text subItem>{apiUserLoaded.email}</Text>
                </InfoItem>
                <InfoItem>
                  <Text item>Telefone</Text>
                  <Text subItem>{apiUserLoaded.phone}</Text>
                </InfoItem>
                <InfoItem>
                  <Text item>Site</Text>
                  <Text subItem>{apiUserLoaded.website}</Text>
                </InfoItem>
                <InfoItem>
                  <Text item>Empresa</Text>
                  <Text subItem>{apiUserLoaded.company.name}</Text>
                </InfoItem>
              </InfoContainer>
            </ScrollContainer>
          </>
        ) : null}
      </Container>
    </>
  );
};

export default User;
