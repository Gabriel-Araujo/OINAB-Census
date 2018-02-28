// @ts-ignore
// @flow
import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Button,
  ScrollView, 
} from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../config/database';
import HeadNav from '../components/HeadNav';
import AboutButton from '../components/AboutButton';

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

  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
  }

  manterDados() {
    alert('qwer');
  }

  render() {
    const { params } = this.props.navigation.state;
    const chave = params ? params.chave : null;

    return (
      <View style={{ flex: 1, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Filial: </Text>
        <Text>Turma: </Text>
        <Text>Evento: </Text>
        <Text>Avaliacao: </Text>
        <Button
          title='Firebase'
          onPress={() => this.manterDados()}
        />
        <Text>chave: {JSON.stringify(chave)}</Text>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />
        <View style={{flexDirection: 'row'}}>
          <View style={{flex:1 , margin:20}} >
            <Button
              title='Vamos Começar a Aventura!'
              accessibilityLabel='Vamos Começar a Aventura!'
              color='#367F53'
              onPress={() => this.props.navigation.navigate('Start')}
            />
          </View>
        </View>
        <Button
          title='Go back'
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

StartScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export { StartScreen };
