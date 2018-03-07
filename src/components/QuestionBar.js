import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../config/styles';

const QuestionBar = (props) => (
  <View style={styles.questionBar}>
    <Text style={[styles.body, styles.fontLight]}>{props.pergunta}</Text>
  </View>
);

export { QuestionBar };
