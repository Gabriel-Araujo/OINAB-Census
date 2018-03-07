import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../config/styles';

const dots = require('../img/dots.png');

const AboutButton = (props) => (
  <TouchableOpacity onPress={() => props.navigation.navigate('About')}>
    <View style={styles.aboutButtonBox}>
      <Image
        source={dots}
        style={styles.imagemNavButton}
      />
    </View>
  </TouchableOpacity>
);

export { AboutButton };
