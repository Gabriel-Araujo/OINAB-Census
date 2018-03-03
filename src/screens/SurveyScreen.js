// @ts-ignore
// @flow
import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Image,
  Button,
  StatusBar,
  ScrollView, 
} from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../config/database';
import HeadNav from '../components/HeadNav';
import AboutButton from '../components/AboutButton';
import ProgressBar from '../components/ProgressBar';
import styles from '../config/styles';

const confirm = require('../img/confirm.png');
const back = require('../img/back.png');
const forward = require('../img/forward.png');

class SurveyScreen extends Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeadNav />,
      headerRight: <AboutButton navigation={ navigation } />,
      
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
    /*
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }

    const { params } = this.props.navigation.state;
    const chaveUsuario = params ? params.chave : null;

    this.setState({ chave: chaveUsuario });
    */
  }

  componentDidMount() {
    
  }

  // Add 0.2 value in current value of progress
  onUpdate() {
    this.progressBar.update(this.progressBar.value() + 0.2);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' />
        <View style={styles.topicBar}>
          <Text style={[styles.headline, styles.fontLight]}>Topico</Text>
        </View>
        <View style={styles.questionBar}>
          <Text style={[styles.body, styles.fontLight]}>Per gunta Pergu nta Pergu ntaP ergun ta Pergu nta?</Text>
        </View>
        <View style={{ flex: 10, padding: 5 }}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{ flex: 1, padding: 5, justifyContent: 'space-around', }}>
              <View style={{ flex: 7, alignSelf: 'stretch', justifyContent: 'space-around'}}>
                <Text style={styles.body}>Respostas</Text>  
                <Text style={styles.body}>sacola</Text>  
              </View>            
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                <Image style={styles.imagemNavButton} source={back} resizeMode='stretch' />
                <Image style={styles.imagemConfirm} source={confirm} resizeMode='stretch' />
                <Image style={styles.imagemNavButton} source={forward} resizeMode='stretch' />
              </View>
              <View style={{ flex: 1, padding: 5, justifyContent: 'center' }}>
                <ProgressBar
                  progress={0.5}
                  ref={ref => {
                    this.progressBar = ref;
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export { SurveyScreen };
