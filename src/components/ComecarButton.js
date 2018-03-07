import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../config/styles';

const ComecarButton = (props) => (
  <View style={styles.startTitle}>
    <View style={styles.buttonRow}>
      <View style={styles.buttonSpace} >
        <Button
          title='Vamos Começar a Aventura!'
          accessibilityLabel='Vamos Começar a Aventura!'
          color='#367F53'
          disabled={props.concluido}
          onPress={() => props.onPress()}
        />
      </View>
    </View>
    {props.concluido ? <Text style={styles.alignCenter}>Obrigado!</Text> : null}
  </View>
);

export { ComecarButton };
