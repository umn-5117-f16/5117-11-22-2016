import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ToolbarAndroid,
  View
} from 'react-native';

export default class ToolbarDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.onActionSelected = this.onActionSelected.bind(this);
  }

  onActionSelected(position) {
    // view this with `react-native log-android`
    console.log(this.state)
    if (position === 0) { // index of 'Settings'
      this.setState((prevState, props) => ({
         count: prevState.count + 1
      }));
    }
  }

  render() {
    return (
      <View>
        <ToolbarAndroid
           actions={[]}
           //logo={require('./hamburger-512x512.png')}
           actions={[{title: 'Settings', icon: require('./hamburger-512x512.png'), show: 'always'}]}
           //navIcon={require('./hamburger-512x512.png')}
           onActionSelected={this.onActionSelected}
           style={styles.toolbar}
           //subtitle="a subtitle"
           title="Toolbar" />
        <Text>
          Number of hamburger clicks: {this.state.count}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    // XXX: without a height, it will not render!
    height: 36,
  }
});
