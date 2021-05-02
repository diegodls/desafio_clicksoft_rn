import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import {
  Container,
  ScrollContainer,
  InfoContainer,
  InfoItem,
  Text,
  IconBack,
  TWF,
  Avatar,
} from './style';

const User = ({route}) => {
  const navigation = useNavigation();
  const {userId} = route.params;

  const [apiUser, setApiUser] = useState({});
  const [apiLoading, setApiLoading] = useState(true);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState('');

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    setApiLoading(true);
    api
      .get(`/users/${userId}`)
      .then(response => {
        setApiUser(response.data);
        setApiLoading(false);
      })
      .catch(err => {
        setApiError(true);
        setApiErrorMessage(`Erro ao buscar Posts - ${err}`);
      });
  }, [userId]);

  return (
    <>
      <Container>
        {apiLoading ? (
          <Text>Carregando</Text>
        ) : (
          <>
            <TWF onPress={handleBack}>
              <IconBack name={'chevron-left'} size={25} />
            </TWF>

            <ScrollContainer>
              <Avatar
                source={require('../../assets/img/blank-profile_502.png')}
              />
              <Text name>{apiUser.name}</Text>
              <InfoContainer>
                <Text category>Informações Pessoais</Text>

                <InfoItem>
                  <Text item>Nickname</Text>
                  <Text subItem>{apiUser.username}</Text>
                </InfoItem>

                <InfoItem>
                  <Text item>Email</Text>
                  <Text subItem>{apiUser.email}</Text>
                </InfoItem>

                <InfoItem>
                  <Text item>Phone</Text>
                  <Text subItem>{apiUser.phone}</Text>
                </InfoItem>

                <InfoItem>
                  <Text item>Site</Text>
                  <Text subItem>{apiUser.website}</Text>
                </InfoItem>

                <InfoItem>
                  <Text item>Empresa</Text>
                  <Text subItem>{apiUser.company.name}</Text>
                </InfoItem>
              </InfoContainer>
            </ScrollContainer>
          </>
        )}
      </Container>
    </>
  );
};

export default User;
