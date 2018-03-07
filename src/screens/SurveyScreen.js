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
import { 
  HeadNav,
  TopicBar,
  AnswersBar,
  QuestionBar,
  AboutButton, 
  ProgressBar,
  CheckBoxList,
} from '../components';
import styles from '../config/styles';

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
      indexTopico: 0,
      indexInstrutor: 0,
      indexPergunta: 0,
      loading: false,
    };
  }

  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }

    const { params } = this.props.navigation.state;
    const chave = params ? params.chave : null;
    const questionario = params ? params.questionario : null;
    const modelo = params ? params.modelo : null;

    this.setState({ chave, questionario, modelo });

    
  }

  componentDidMount() {
    
  }

  // Add 0.2 value in current value of progress
  onUpdate() {
    this.progressBar.update(this.progressBar.value() + 0.2);
  }

  render() {
    return (
      <View style={styles.flexOne}>
        <StatusBar barStyle='light-content' />
        <TopicBar topico={this.state.modelo.topicos[this.state.indexTopico].titulo} subtopico={false}/>
        <QuestionBar pergunta={this.state.modelo.topicos[this.state.indexTopico].perguntas[this.state.indexPergunta].pergunta}/>
        <View style={styles.optionsContainer}>
          <ScrollView contentContainerStyle={styles.optionsScrollView}>
            <View style={styles.optionsView}>
              <Text>{JSON.stringify(this.state.modelo.topicos[this.state.indexTopico].perguntas[this.state.indexPergunta].opcoes)}</Text>
              <CheckBoxList data={this.state.modelo.topicos[this.state.indexTopico].perguntas[this.state.indexPergunta].opcoes} />      
            </View>
          </ScrollView>
        </View>
        <AnswersBar />
        <View style={styles.progressBarView}>
          <ProgressBar progress={0.3} ref={ref => { this.progressBar = ref; }} />
        </View>
      </View>
    );
  }
}

export { SurveyScreen };
