import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class GridNav extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Grid Nav</Text>
        {this.getButton('Program')}
        {this.getButton('Speakers')}
        {this.getButton('Hymns')}
        {this.getButton('Maps')}
        {this.getButton('Registration')}
        {this.getButton('Policy')}
        {this.getButton('Contacts')}
        {this.getButton('Photos')}
        {this.getButton('About')}
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
