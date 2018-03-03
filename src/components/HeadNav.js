import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from '../config/styles';

const naNome = require('../img/na-avaliacoes.png');

class HeadNav extends React.Component {
  render() {
    return (
      <Image
        source={naNome}
        resizeMode='stretch'
        style={styles.naNomeNav}
      />
    );
  }
}

export default HeadNav;
