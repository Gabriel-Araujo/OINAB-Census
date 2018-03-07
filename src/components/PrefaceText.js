import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../config/styles';

const PrefaceText = (props) => (
  <View style={styles.startTitle}>
    <View style={styles.startTitle}>
          <Text style={styles.title}>{ props.titulo }</Text>
          <Text style={styles.subhead}>{ props.subtitulo }</Text>
    </View>
    <Text style={styles.body}>{ props.descricao }</Text>
  </View>
);

export { PrefaceText };
