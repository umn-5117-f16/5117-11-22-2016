import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Button,
  Card,
  Toolbar
} from 'react-native-material-design';

export default class Material extends Component {

  render() {
    return (
      <View>
        <Toolbar title="hi" />
        <Card style={styles.hamburgerCard}>
          <Card.Media
            height={200}
            image={<Image source={{uri: 'http://i.imgur.com/CUG0Aofb.jpg'}} />}
            overlay
          />
          <Card.Body>
            <Text>Some text to go in the body.</Text>
          </Card.Body>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hamburgerCard: {
    top: 100,
  },
});
