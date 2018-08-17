/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry
} from 'react-native';

import BaiduMapDemo from './BaiduMapDemo';

class rn extends Component {
  render() {
    return (
      <BaiduMapDemo />
    );
  }
}

AppRegistry.registerComponent('rn', () => rn);
