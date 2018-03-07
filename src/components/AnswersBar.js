import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from '../config/styles';

const confirm = require('../img/confirm.png');
const confirmDisabled = require('../img/confirm-disabled.png');
const back = require('../img/back.png');
const forward = require('../img/forward.png');

const AnswersBar = (props) => (
  <View style={styles.answersView}>
    <Image style={styles.imagemNavButton} source={back} resizeMode='stretch' />
    <Image style={styles.imagemConfirm} source={confirmDisabled} resizeMode='stretch' />
    <Image style={styles.imagemNavButton} source={forward} resizeMode='stretch' />
  </View>
);

export { AnswersBar };
