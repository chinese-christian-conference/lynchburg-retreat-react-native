import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SpeakersRoot extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Program:</Text>
        <Text>Day 1:</Text>
        <Text>Day 2:</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
