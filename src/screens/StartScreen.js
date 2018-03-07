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
  ActivityIndicator, 
} from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../config/database';
import { 
  HeadNav, 
  PrefaceText,
  AboutButton,   
  StartButton, 
} from '../components';
import styles from '../config/styles';

const barco = require('../img/aventura.png');

class StartScreen extends Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeadNav />,
      headerRight: <AboutButton navigation={navigation} />,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      chave: {},
      chaveKey: '',
      questionario: {},
      modelo: {},
      evento: {},
      titulo: '',
      subtitulo: '',
      descricao: '',
      loadingAvaliacao: true,
      loadingModelo: true,
      concluido: false,
    };
  }

  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }

    const { params } = this.props.navigation.state;
    const chaveUsuario = params ? params.chave : null;
    const chaveKey = params ? params.chaveKey : null;

    this.setState({ chave: chaveUsuario, chaveKey: chaveKey });

    if(chaveUsuario.publico === 'interno') {
      this.fetchQuestionario(chaveUsuario, chaveKey);
    } else if(chaveUsuario.publico === 'externo') {
      this.fetchEvento(chaveUsuario, chaveKey);
    }
  }

  fetchQuestionario(chave, key) {
    const filialKey = chave.filial;
    const turmaKey = chave.turma;
    const questionarioKey = chave.questionario;
    firebase.database()
      .ref(`filiais/${filialKey}/turmas/${turmaKey}/questionarios/${questionarioKey}`)
      .once('value', snapshot => {
        let result = snapshot.val();
        if(result === null){
          alert('Chave Inválida');
          this.props.navigation.goBack();
          return;
        }

        this.setState({ 
          questionario: result,
          titulo: result.titulo,
          subtitulo: result.responsavel,
          concluido: result.respostas[key].concluido,
          loadingAvaliacao: false,
        });

        this.fetchModelo(result.modelo);
      });
  }

  fetchEvento(chave) {
    const filialKey = chave.filial;
    const eventoKey = chave.evento;
    firebase.database()
      .ref(`filiais/${filialKey}/eventos/${eventoKey}`)
      .once('value', snapshot => {
        let result = snapshot.val();
        if(result === null){
          alert('Chave Inválida');
          this.props.navigation.goBack();
          return;
        }

        this.setState({ 
          evento: result, 
          titulo: result.evento, 
          subtitulo: '',
          loadingAvaliacao: false,
        });

        this.fetchModelo(result.modelo);
      });
  }

  fetchModelo(modeloKey) {
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

        this.setState({ 
          modelo: result, 
          descricao: result.descricao,
          loadingModelo: false,
        });
      });
  }

  comecarAventura(){
    this.props.navigation.navigate('Survey', {
      chave: this.state.chave,
      questionario: this.state.questionario,
      modelo: this.state.modelo,
    });
  }

  render() {
    return (
      <View style={styles.startContainer}>
        <StatusBar barStyle='light-content' />
        {(this.state.loadingAvaliacao || this.state.loadingModelo) ?
          <ActivityIndicator size='large' color='#075E54' />
          : 
          <ScrollView>
            <View style={styles.startScrollView}>
              <PrefaceText titulo={this.state.titulo} subtitulo={this.state.subtitulo} descricao={this.state.descricao} />
              <Image style={styles.imagem} source={barco} resizeMode='stretch' />
              <StartButton concluido={this.state.concluido} onPress={() => this.comecarAventura()} />
            </View>
            <View style={styles.viewSpace} />
          </ScrollView>
        }
      </View>
    );
  }
}

StartScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export { StartScreen };
