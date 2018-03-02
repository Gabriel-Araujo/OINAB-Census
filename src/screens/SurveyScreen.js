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
      
        <View style={styles.topicBar}>
          <Text style={[styles.headline, styles.fontLight]}>Topico</Text>
        </View>
        <View style={styles.questionBar}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={[styles.title, styles.fontLight]}>Pergunta</Text>
          </View>
        </View>
        <View style={{ flex: 10, padding: 5, justifyContent: 'space-between' }}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'space-around', backgroundColor: 'yellow', }}>
              <Text style={styles.body}>Respostas</Text>
              <Text style={styles.body}>Respostas</Text>
              <Text style={styles.body}>Respostas</Text>  
              <Text style={styles.body}>Respostas</Text>  
              <Text style={styles.body}>Respostas</Text>  
              <Text style={styles.body}>Respostas</Text>  
              <Text style={styles.body}>Respostas</Text>  
              <Text style={styles.body}>Respostas</Text>  
              <Text style={styles.body}>Respostas</Text>  
              <Text style={styles.body}>Respostas</Text>  
              <Text style={styles.body}>sacola</Text>  
            </View>            
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
              <Image style={styles.imagemNavButton} source={back} resizeMode='stretch' />
              <Image style={styles.imagemConfirm} source={confirm} resizeMode='stretch' />
              <Image style={styles.imagemNavButton} source={forward} resizeMode='stretch' />
            </View>
            <View style={{ flex: 1, padding: 5 }}>
              <ProgressBar
                progress={0.5}
                ref={ref => {
                  this.progressBar = ref;
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export { SurveyScreen };
