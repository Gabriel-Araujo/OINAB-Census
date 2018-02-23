// @ts-ignore
// @flow
import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import styles from '../config/styles';

const naNome = require('../img/na-avaliacoes.png');
const mountain = require('../img/013-mountain.png');

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { text: '' };
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
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
          </View>
          <Button
            title='Entrar'
            color='#367F53'
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('Start', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}
          />
          <View style={{ height: 60 }} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default HomeScreen;
