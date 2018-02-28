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

  constructor(props) {
    super(props);
    this.state = { 
      chave: {},
      filial: {},
      questionario: {},
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

  getFilial() {
    this.setState({ loading: true });
    const filialKey = this.state.chave.filial;
    firebase.database()
      .ref(`filiais/${filialKey}`)
      .once('value', snapshot => {
        let result = snapshot.val();
        alert(JSON.stringify(result));
        this.setState({ loading: false });

        if(result === null){
          alert('Chave Inválida');
          this.props.navigation.goBack();
          return;
        }

        this.setState({ filial: result });
      });
  }

  manterDados() {
    this.setState({ loading: true });
    const filialKey = this.state.chave.filial;
    const turmaKey = this.state.chave.turma;
    const questionarioKey = this.state.chave.questionario;
    firebase.database()
      .ref(`filiais/${filialKey}/turmas/${turmaKey}/questionarios/${questionarioKey}`)
      .once('value', snapshot => {
        let result = snapshot.val();
        alert(JSON.stringify(result));
        this.setState({ loading: false });

        if(result === null){
          alert('Chave Inválida');
          this.props.navigation.goBack();
          return;
        }

        this.setState({ questionario: result });
      });
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center' }}>
          <Text>Filial: Nova Acrópole { this.state.filial.nome }</Text>
          <Text>Turma: { JSON.stringify(this.state.filial.turmas) }</Text>
          <Text>Evento: </Text>
          <Text>Avaliacao: { this.state.questionario.titulo }</Text>
          <Button
            title='Filial'
            onPress={() => this.getFilial()}
          />
          <Button
            title='Questionario'
            onPress={() => this.manterDados()}
          />
          <Text>chave: {JSON.stringify(this.state.chave)}</Text>
          <Text>questionario: {JSON.stringify(this.state.questionario)}</Text>
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
      </ScrollView>
    );
  }
}

StartScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export { StartScreen };
