import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import {
  Button,
  Card,
  RadioButtonGroup,
  Subheader,
  Toolbar
} from 'react-native-material-design';

export default class Material extends Component {

  render() {
    return (
      <View>
        <Toolbar title="hi" />
        <ScrollView style={{top: 56}}>
          <Card style={styles.hamburgerCard}>
            <Card.Media
              height={200}
              image={<Image source={{uri: 'http://i.imgur.com/CUG0Aofb.jpg'}} />}
              overlay
            />
            <Card.Body>
              <Text>This is a picture of a hamburger!</Text>
            </Card.Body>
          </Card>

          <Subheader text="<TextInput>" />

          <TextInput
            editable = {true}
            maxLength = {40}
          />

          <Subheader text="<TextInput multiline>" />

          <TextInput
            multiline = {true}
            editable = {true}
            maxLength = {400}
          />

          <Button text='here is a button' raised={true} />

          <Subheader text="Light Theme" />
          <RadioButtonGroup
              selected={1}
              items={[{
                  value: 1, label: 'Selected by default'
              }, {
                  value: 2, label: 'Default'
              }, {
                  value: 3, label: 'Disabled', disabled: true
              }, {
                  value: 4
              }]}
          />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hamburgerCard: {

  },
});
