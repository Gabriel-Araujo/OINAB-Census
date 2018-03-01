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

const confirm = require('../img/confirm.png');
const back = require('../img/back.png');
const forward = require('../img/forward.png');

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
      
        <View style={{ flex: 1, padding: 20 }}>
          <Text style={styles.title}>Survey Screen</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'red', justifyContent: 'space-around'}}>
          <Image style={styles.imagemNavButton} source={back} resizeMode='stretch' />
          <Image style={styles.imagemConfirm} source={confirm} resizeMode='stretch' />
          <Image style={styles.imagemNavButton} source={forward} resizeMode='stretch' />
        </View>
        <View style={{ height: 60 }} />
      
      </View>
    );
  }
}

export { SurveyScreen };
