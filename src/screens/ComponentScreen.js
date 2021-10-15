import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ComponentScreen = () => {
  const name = 'Karina Espinola ;)'
  return (
    <View>
      <Text style={styles.heading}>
        Getting started with React Native!
      </Text>
      <Text style={styles.subheading}>
        My name is {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 45
  },
  subheading: {
    fontSize: 20
  }
});

export default ComponentScreen;
