import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../config/styles';

class CheckBoxList extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <View style={styles.checkBoxListView}>
        <View style={styles.checkBoxItemView}>
          <Text style={styles.body}>{this.props.data[0].titulo}</Text>
        </View>
        <View style={styles.checkBoxItemView}>
          <Text style={styles.body}>{this.props.data[1].titulo}</Text>
        </View>
        <View style={styles.checkBoxItemView}>
          <Text style={styles.body}>{this.props.data[2].titulo}</Text>
        </View>
        <View style={styles.checkBoxItemView}>
          <Text style={styles.body}>{this.props.data[3].titulo}</Text>
        </View>
        <View style={styles.checkBoxItemView}>
          <Text style={styles.body}>{this.props.data[4].titulo}</Text>
        </View>
      </View>
    );
  }
}

export { CheckBoxList };
