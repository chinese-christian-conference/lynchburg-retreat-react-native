import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

class Dummy extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dummy Component!</Text>
      </View>
    );
  }
}

export default createDrawerNavigator({
  Main: {
    screen: Dummy
  }
}, {
  drawerWidth: 256,
  initialRouteName: 'Main'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
