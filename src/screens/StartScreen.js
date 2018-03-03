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
      loading: false,
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

        this.setState({ 
          questionario: result,
          concluido: result.respostas[key].concluido
        });

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
      <View style={styles.startContainer}>
      <ScrollView>
        <View style={styles.startScrollView}>
          <View style={styles.startTitle}>
            { this.state.chave.publico === 'interno' 
              ? 
              <View>
                <Text style={styles.title}>{ this.state.questionario.titulo }</Text>
                <Text style={styles.subhead}>{ this.state.questionario.responsavel }</Text>
              </View>
              :
              <Text style={styles.title}>{ this.state.evento.evento }</Text> 
            }
          </View>
          <Text style={styles.body}>{ this.state.modelo.descricao }</Text>
          <View style={styles.viewSpace} />
          <Image style={styles.imagem} source={barco} resizeMode='stretch' />
          <View style={styles.buttonRow}>
            <View style={styles.buttonSpace} >
              <Button
                title='Vamos Começar a Aventura!'
                accessibilityLabel='Vamos Começar a Aventura!'
                color='#367F53'
                disabled={this.state.concluido}
                onPress={() => this.props.navigation.navigate('Survey', {
                  chave: this.state.chave,
                  questionario: this.state.questionario,
                  modelo: this.state.modelo,
                })}
              />
            </View>
          </View>
          {this.state.concluido ? <Text style={styles.alignCenter}>Obrigado!</Text> : null}
        </View>
        <View style={styles.viewSpace} />
      </ScrollView>
      </View>
    );
  }
}

StartScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export { StartScreen };
