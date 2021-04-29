import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const User = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>User</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default User;
