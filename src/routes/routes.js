import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import User from '../pages/User';
import AddMessage from '../pages/AddMessage';
import Message from '../pages/Message';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{
            title: 'Usuário',
          }}
        />
        <Stack.Screen
          name="AddMessage"
          component={AddMessage}
          options={{
            title: 'Adicionar Mensagem',
          }}
        />
        <Stack.Screen
          name="Message"
          component={Message}
          options={{
            title: 'Mensagem Completa',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
