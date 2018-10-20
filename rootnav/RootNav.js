import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import GridNav from '../gridnav/GridNav';
import ProgramRoot from '../program/ProgramRoot';
import SpeakersRoot from '../speakers/SpeakersRoot';
import HymnsRoot from '../hymns/HymnsRoot';
import MapsRoot from '../maps/MapsRoot';
import RegistrationRoot from '../registration/RegistrationRoot';
import PolicyRoot from '../policy/PolicyRoot';
import ContactsRoot from '../contacts/ContactsRoot';
import PhotosRoot from '../photos/PhotosRoot';
import AboutUsRoot from '../about/AboutUsRoot';

export default createDrawerNavigator({
  Home: GridNav,
  Program: ProgramRoot,
  Speakers: SpeakersRoot,
  Hymns: HymnsRoot,
  Maps: MapsRoot,
  Registration: RegistrationRoot,
  Policy: PolicyRoot,
  Contacts: ContactsRoot,
  Photos: PhotosRoot,
  About: AboutUsRoot
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
