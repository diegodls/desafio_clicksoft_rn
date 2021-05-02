import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import List from '../pages/List';
import User from '../pages/User';
import AddComment from '../pages/AddComment';
import CompletePost from '../pages/CompletePost';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="List"
          component={List}
          options={{
            title: 'Lista',
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
          name="AddComment"
          component={AddComment}
          options={{
            title: 'Adicionar Comentário',
          }}
        />
        <Stack.Screen
          name="CompletePost"
          component={CompletePost}
          options={{
            title: 'Post Completo',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
