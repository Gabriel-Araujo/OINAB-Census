import { StyleSheet, Dimensions, Platform } from 'react-native';

const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 7;

export default StyleSheet.create({
  flexOne: { 
    flex: 1,
    backgroundColor: '#F4F4F4', 
  },
  container: {
    flex: 7,
    backgroundColor: '#054D44', //'#115430',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startContainer: {
    flex: 1, 
    backgroundColor: '#F4F4F4', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  optionsContainer: {
    flex: 10, 
    padding: 5,
  },
  optionsScrollView: {
    flexGrow: 1
  },
  optionsView: {
    flex: 1, 
    padding: 5, 
    justifyContent: 'space-around',
  },
  answersView: { 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-around'
  },
  checkBoxListView: {
    flex: 7, 
    alignSelf: 'stretch', 
    justifyContent: 'space-around'
  },
  checkBoxItemView: {
    padding: 10,
    flexDirection: 'row',
    borderColor: '#D0D0D0', //'#737373',
    borderRadius: 10,
    borderWidth: 1,
  },
  progressBarView: {
    flex: 1, 
    padding: 5, 
    justifyContent: 'center'
  },
  startScrollView: { 
    flex: 1, 
    padding: 20,
  },
  startTitle: {
    marginBottom: 12
  },
  alignCenter: {
    alignSelf: 'center'
  },
  viewSpace: {
    height: 60,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  buttonSpace: {
    flex: 1, 
    margin: 20,
  },
  imagem: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  imagemConfirm: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  imagemNavButton: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  naNome: {
    width: 300,
    height: 114,
    alignSelf: 'center',
  },
  naNomeNav: { 
    width: 200, 
    height: 76, 
    alignSelf: 'center',
  },
  aboutButtonBox:{
    padding: 10,
  },
  codigoBox: {
    backgroundColor: '#C7EFCF',
    padding: 10,
    margin: 10,
    width: 160,
    height: 45,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codigo: {
    color: '#333745',
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    fontSize: 30,
    width: 150,
    height: 36,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: Platform.OS === "ios" ? 0.355469 : undefined,
  },
  headline: {
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 22,
    includeFontPadding: false,
    letterSpacing: Platform.OS === "ios" ? -0.408 : undefined,
  },
  subhead: {
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: Platform.OS === "ios" ? -0.24 : undefined,
  },
  body: {
    fontSize: 17,
    lineHeight: 22,
  },
  topicBar: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'center', 
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#075E54', //'#217F5E',
  },
  questionBar: {
    flex: 2, 
    padding: 5,
    paddingLeft: 15,
    justifyContent: 'center',
    backgroundColor: '#1F7F74',
  },
  fontLight: {
    color: '#fff',
  },
  fontDark: {
    color: '#000',
  },
});
