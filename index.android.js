/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Hello from './demos/hello'
import ToolbarDemo from './demos/toolbar-demo'

AppRegistry.registerComponent('Csci5117Nov22', () => ToolbarDemo);
