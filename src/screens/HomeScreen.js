// @ts-ignore
// @flow
import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  Platform,
  Keyboard,
  StatusBar,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../config/database';
import styles from '../config/styles';

const naNome = require('../img/na-avaliacoes.png');
const acropole = require('../img/acropole.png');

class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { 
      chave: '',
      loading: false,
    };
  }

  componentWillMount() {
    firebase.initializeApp(FIREBASE_CONFIG);
    this.setState({ chave: 'AAAAAAA' });
  }

  verificaChave() { 
    if(this.state.chave.length < 7){
      alert('A chave deve conter 7 caracteres!');
      return;
    }

    this.setState({ loading: true });
    firebase.database()
      .ref('chaves/' + this.state.chave)
      .once('value', snapshot => {
        let result = snapshot.val();
        this.setState({ loading: false });

        if(result === null){
          alert('Chave Inválida');
          this.setState({ chave: '' });
          return;
        }

        Keyboard.dismiss();
        this.props.navigation.navigate('Start', {
          chaveKey: this.state.chave,
          chave: result,
        });
      });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
          <Image style={styles.imagem} source={acropole} resizeMode='stretch' />
          <Image style={styles.naNome} source={naNome} resizeMode='stretch' />
          <Text style={styles.fontLight}>Informe o código de acesso:</Text>
          <View style={styles.codigoBox}>
            <TextInput
              style={styles.codigo}
              autofocus
              returnKeyType='next'
              underlineColorAndroid='#C7EFCF'
              placeholder='AA99BB7'
              autoCapitalize='characters'
              maxLength={7}
              onChangeText={chave => this.setState({ chave: chave.toUpperCase() })}
              value={this.state.chave}
              onSubmitEditing={() => this.verificaChave()}
            />
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonSpace} >
              {
                !this.state.loading
                ? 
                  <Button
                    title='Entrar'
                    accessibilityLabel='Entrar'
                    color={Platform.OS === 'ios' ? '#C7EFCF' : '#367F53'}
                    disabled={this.state.loading}
                    onPress={() => this.verificaChave()}
                  />
                : <ActivityIndicator size='large' color='#00ff00' />
              }
            </View>
          </View>
          <View style={styles.viewSpace} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export { HomeScreen };
