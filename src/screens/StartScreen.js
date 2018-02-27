// @ts-ignore
// @flow
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../config/database';
import HeadNav from '../components/HeadNav';

class StartScreen extends Component {
  
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      headerTitle: <HeadNav />,
    };
  };

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const chave = params ? params.chave : null;
    //const otherParam = params ? params.otherParam : null;

    return (
      <View style={{ flex: 1, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>chave: {JSON.stringify(chave)}</Text>
        <Button
          title='Go to Details... again'
          onPress={() => this.props.navigation.navigate('Start')}
        />
        <Button
          title='Go back'
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

StartScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export { StartScreen };
