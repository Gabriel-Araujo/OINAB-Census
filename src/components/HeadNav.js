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
        style={{ width: 200, height: 76, alignSelf: 'center' }}
      />
    );
  }
}

export default HeadNav;
