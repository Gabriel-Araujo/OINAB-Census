// @ts-ignore
// @flow
import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Button,
  ScrollView, 
} from 'react-native';

class AboutScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <Button
          title='Go back'
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export { AboutScreen };
