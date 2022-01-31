/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';


import { WebView } from 'react-native-webview';


export default class App extends Component {

  constructor(props) {
    super(props);



  }

  render() {
    return (


      <WebView
        source={{
          uri: 'https://master.d1vh19329qeha9.amplifyapp.com/'
        }}
        style={{ marginTop: 20 }}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
});