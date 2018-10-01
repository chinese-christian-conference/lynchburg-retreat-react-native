import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import GridNav from '../gridnav/GridNav';

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
  Home: GridNav,
  Main: Dummy
}, {
  drawerWidth: 256,
  initialRouteName: 'Home'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
