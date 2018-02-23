import { StyleSheet, Dimensions } from 'react-native';

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
  mountain: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  naNome: {
    width: 300,
    height: 114,
    alignSelf: 'center',
  },
  descricao: {
    color: '#fff',
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
});
