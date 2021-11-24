import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    height: 200,
  },
  textOneStyle: {
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'flex-start'
  },
  textTwoStyle: {
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'center'
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'flex-end'
  }
});

export default BoxScreen;