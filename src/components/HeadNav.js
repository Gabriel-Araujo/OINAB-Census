import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from '../config/styles';

const naNome = require('../img/na-avaliacoes.png');

const HeadNav = () => (
  <Image
    source={naNome}
    resizeMode='stretch'
    style={styles.naNomeNav}
  />
);

export { HeadNav };
