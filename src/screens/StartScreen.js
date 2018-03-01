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

class StartScreen extends Component {
  
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
      evento: {},
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

    if(chaveUsuario.publico === 'interno') {
      this.fetchQuestionario(chaveUsuario);
    } else if(chaveUsuario.publico === 'externo') {
      this.fetchEvento(chaveUsuario);
    }
  }

  fetchQuestionario(chave) {
    this.setState({ loading: true });
    const filialKey = chave.filial;
    const turmaKey = chave.turma;
    const questionarioKey = chave.questionario;
    firebase.database()
      .ref(`filiais/${filialKey}/turmas/${turmaKey}/questionarios/${questionarioKey}`)
      .once('value', snapshot => {
        let result = snapshot.val();
        this.setState({ loading: false });

        if(result === null){
          alert('Chave Inválida');
          this.props.navigation.goBack();
          return;
        }

        this.setState({ questionario: result });
        this.fetchModelo(result.modelo);
      });
  }

  fetchEvento(chave) {
    this.setState({ loading: true });
    const filialKey = chave.filial;
    const eventoKey = chave.evento;
    firebase.database()
      .ref(`filiais/${filialKey}/eventos/${eventoKey}`)
      .once('value', snapshot => {
        let result = snapshot.val();
        this.setState({ loading: false });

        if(result === null){
          alert('Chave Inválida');
          this.props.navigation.goBack();
          return;
        }

        this.setState({ evento: result });
        this.fetchModelo(result.modelo);
      });
  }

  fetchModelo(modeloKey) {
    this.setState({ loading: true });
    firebase.database()
      .ref(`modelos/${modeloKey}`)
      .once('value', snapshot => {
        let result = snapshot.val();
        this.setState({ loading: false });

        if(result === null){
          alert('Chave Inválida');
          this.props.navigation.goBack();
          return;
        }

        this.setState({ modelo: result });
      });
  }

  render() {
    
    return (
      <View style={{ flex: 1, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
        <View style={{ flex: 1, padding: 20 }}>
          { this.state.chave.publico === 'interno' 
            ? 
            <View style={{marginBottom: 10}}>
              <Text style={styles.title}>{ this.state.questionario.titulo }</Text>
              <Text style={styles.subhead}>{ this.state.questionario.responsavel }</Text>
            </View>
            :
            <View style={{marginBottom: 10}}>
              <Text style={styles.title}>{ this.state.evento.evento }</Text>
            </View>
          }
          <Text style={styles.body}>{ this.state.modelo.descricao }</Text>
          <View style={{ height: 30 }} />
          <Image style={styles.imagem} source={barco} resizeMode='stretch' />
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:1 , margin:20}} >
              <Button
                title='Vamos Começar a Aventura!'
                accessibilityLabel='Vamos Começar a Aventura!'
                color='#367F53'
                onPress={() => this.props.navigation.navigate('Survey', {
                  chave: this.state.chave,
                  questionario: this.state.questionario,
                  modelo: this.state.modelo,
                })}
              />
            </View>
          </View>
        </View>
        <View style={{ height: 60 }} />
      </ScrollView>
      </View>
    );
  }
}

StartScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export { StartScreen };
