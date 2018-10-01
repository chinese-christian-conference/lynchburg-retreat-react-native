import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class GridNav extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Grid Nav</Text>
        {this.getButton('Main')}
      </View>
    );
  }

  getButton(path) {
    return (
      <Button
        title={path}
        color='blue'
        onPress={() => {
          this.props.navigation.navigate(path);
        }}
      />
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
