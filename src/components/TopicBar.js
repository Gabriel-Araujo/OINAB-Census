import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../config/styles';

const TopicBar = (props) => (
  <View style={styles.topicBar}>
    <Text style={[styles.headline, styles.fontLight]}>{props.topico}</Text>
    { props.subtopico && <Text style={[styles.subhead, styles.fontLight]}>{props.subtopico}</Text> }
  </View>
);

export { TopicBar };
