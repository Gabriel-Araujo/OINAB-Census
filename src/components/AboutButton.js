import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../config/styles';

const dots = require('../img/dots.png');

class AboutButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
        <View style={styles.aboutButtonBox}>
          <Image
            source={dots}
            style={styles.imagemNavButton}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default AboutButton;
