import React, { Component } from 'react';
import { Button, DrawerLayoutAndroid, Navigator, Text, TextInput, TouchableHighlight, View } from 'react-native';

class DrawerContents extends Component {

  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.goToFoo = this.goToFoo.bind(this);
  }

  goHome() {
    console.log('todo');
  }

  goToFoo() {
    console.log('todo');
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <TouchableHighlight onPress={this.goHome}>
          <Text>Go home</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.goToFoo}>
          <Text>go to foo</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


export default class MultiviewThing extends Component {
  constructor(props) {
    super(props);
    this.onPressButton = this.onPressButton.bind(this);
    this.router = this.router.bind(this);
  }

  onPressButton() {
    this.refs.drawer.openDrawer();
  }

  router(route, navigator) {
    console.log(route);
    if (route.name === 'foo') {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink'}}>
          <Text>FOO</Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'powderblue'}}>
          <Text>HOME</Text>
        </View>
      );
    }
  }

  render() {

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <DrawerContents />}
        ref='drawer'>

        <Button onPress={() => this.refs.drawer.openDrawer()} title="menu" color="#841584" />

        <Navigator
          initialRoute={{ name: 'home' }}
          ref="navigator"
          renderScene={this.router}
        />

      </DrawerLayoutAndroid>
    );
  }
}
