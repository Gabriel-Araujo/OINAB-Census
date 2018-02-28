import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../config/styles';

const dots = require('../img/dots.png');

class AboutButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
        <View style={{padding: 10}}>
          <Image
            source={dots}
            style={{ width: 30, height: 30 }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default AboutButton;
