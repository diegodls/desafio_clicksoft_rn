import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const AddComment = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>AddComment</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0CF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddComment;
