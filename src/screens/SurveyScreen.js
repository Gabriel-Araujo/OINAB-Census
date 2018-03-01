// @ts-ignore
// @flow
import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Image,
  Button,
  ScrollView, 
} from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../config/database';
import HeadNav from '../components/HeadNav';
import AboutButton from '../components/AboutButton';
import styles from '../config/styles';

const barco = require('../img/aventura.png');

class SurveyScreen extends Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeadNav />,
      headerRight: <AboutButton navigation={ navigation } />,
      headerStyle: {
        backgroundColor: '#115430',
        height: 100,
      },
    };
  };

  constructor(props) {
    super(props);
    this.state = { 
      chave: {},
      questionario: {},
      modelo: {},
      index: 0,
      loading: false,
    };
  }

  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }

    const { params } = this.props.navigation.state;
    const chaveUsuario = params ? params.chave : null;

    this.setState({ chave: chaveUsuario });
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
        <View style={{ flex: 1, padding: 20 }}>
          <Text style={styles.title}>Survey Screen</Text>
        </View>  
        <View style={{ height: 60 }} />
      </ScrollView>
      </View>
    );
  }
}

export { SurveyScreen };
