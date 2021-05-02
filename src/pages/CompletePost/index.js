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

const CompletePost = ({route}) => {
  const navigation = useNavigation();
  const {routePost} = route.params;

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    setLoading(true);

    if (routePost) {
      setPost(routePost);
      setLoading(false);
    } else {
      setError(true);
    }
  }, []);

  return (
    <>
      <Container>
        {loading ? (
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
              <InfoContainer>
                <Text category>{post.title}</Text>
                <InfoItem>
                  <Text subItem>{post.body}</Text>
                </InfoItem>
              </InfoContainer>
            </ScrollContainer>
          </>
        )}
      </Container>
    </>
  );
};

export default CompletePost;
