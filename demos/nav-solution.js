import React, { Component, PropTypes } from 'react';
import { BackAndroid, View, Text, Navigator, TouchableHighlight } from 'react-native';

class MyScene extends Component {
  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

function initBackButton(myNavigator) {
  BackAndroid.addEventListener('hardwareBackPress', function() {
   // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
   // Typically you would use the navigator here to go to the last state.

   console.log('back button handler!');
   myNavigator.pop();
   return true;
  //  if (!this.onMainScreen()) {
  //    this.goBack();
  //    return true;
  //  }
  //  return false;
  });
}

export default class SimpleNavigationApp extends Component {

  componentDidMount() {
    initBackButton(this.refs.navigator);
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        ref="navigator"
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}
