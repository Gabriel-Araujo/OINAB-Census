import { StyleSheet, Dimensions, Platform } from 'react-native';

const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 7;

export default StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: '#115430',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  imagemConfirm: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  imagemNavButton: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  naNome: {
    width: 300,
    height: 114,
    alignSelf: 'center',
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
    padding: 5,
    backgroundColor: '#217F5E',
  },
  questionBar: {
    flex: 2, 
    padding: 5,
    backgroundColor: '#379970',
  },
  fontLight: {
    color: '#fff',
  },
  fontDark: {
    color: '#000',
  },
});
