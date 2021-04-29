import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconFA from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';

const List = () => {
  const {navigate} = useNavigation();
  const [valor, setValor] = useState(0);
  const [loadingData, setLoadingData] = useState(true);
  const [apiPosts, setApiPosts] = useState([]);

  async function loadPosts() {
    await api.get('/posts').then(response => {
      if (response.status !== 200) {
        throw new Error(String(response.status));
      } else {
        console.log(response.data);
        setApiPosts(response.data);
        setLoadingData(false);
      }
    });
  }

  function handleNavigation() {
    console.log('indo para Users');
    setValor(valor + 1);
    navigate('User');
  }

  useEffect(() => {
    setLoadingData(true);
    loadPosts();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {loadingData ? (
          <IconFA name={'remove'} size={50} color={'#C40'} />
        ) : (
          <IconFA name={'check'} size={50} color={'#4C0'} />
        )}
        <Text>{apiPosts.length}</Text>

        <Text style={styles.textButton1}>
          unt aut facere repellat provident occaecati excepturi optio
          reprehenderit
        </Text>
        <Text style={styles.textButton2}>Ubuntu: aA bB cC dD </Text>
        <Text style={styles.textButton3}>Ubuntu: aA bB cC dD </Text>
        <Text style={styles.textButtonN}>Normal: aA bB cC dD</Text>
        <TouchableWithoutFeedback onPress={handleNavigation}>
          <View style={styles.button}>
            <Text style={styles.textButton}>O Valor é: </Text>
            <Text style={styles.textButtonV}>{valor}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '50%',
    height: 80,
    borderRadius: 8,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
  },
  textButtonV: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  textButton1: {
    fontSize: 40,
    fontFamily: 'MavenPro-Black',
  },
  textButton2: {
    fontSize: 40,
    fontFamily: 'Ubuntu-BoldItalic',
  },
  textButton3: {
    fontSize: 40,
    fontFamily: 'Ubuntu',
  },
  textButtonN: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default List;
