import React from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import RootNav from './rootnav/RootNav';
// import { Record } from 'immutable';

export default class App extends React.Component {
  state = {
    hasLoaded: false
  };

  render() {
    if (!this.state.hasLoaded){
      return (
        <AppLoading
          startAsync={this._loadAsync}
          onError={this._onError}
          onFinish={this._onFinish} />
      );
    }
    return (
      <RootNav />
    );
  }

  _loadAsync = async () => {
    console.log('loading App');
    return Promise.resolve(true);
  };

  _onError = e => {
    console.warn(_onError, e);
  };

  _onFinish = () => {
    this.setState({hasLoaded: true});
  };

}
