// @ts-ignore
// @flow
import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../config/database';
import styles from '../config/styles';

const naNome = require('../img/na-avaliacoes.png');
const mountain = require('../img/013-mountain.png');

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
          chave: result,
        });
      });
    
  }
  
  render() {

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
          <Image style={styles.mountain} source={mountain} resizeMode='stretch' />
          <Image style={styles.naNome} source={naNome} resizeMode='stretch' />
          <Text style={styles.descricao}>Informe o código de acesso:</Text>
          <View style={styles.codigoBox}>
            <TextInput
              style={styles.codigo}
              autofocus
              returnKeyType='next'
              underlineColorAndroid='#C7EFCF'
              placeholder='AA99BB7'
              autoCapitalize='characters'
              maxLength={7}
              onChangeText={chave => this.setState({ chave })}
              value={this.state.chave}
              onSubmitEditing={() => this.verificaChave()}
            />
          </View>
          <Button
            title='Entrar'
            accessibilityLabel='Entrar'
            color='#367F53'
            disabled={this.state.loading}
            onPress={() => this.verificaChave()}
          />
          <View style={{ height: 60 }} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export { HomeScreen };
