export const darkContrast = '#000000',
  lightContrast = '#1C1C1E',
  nonFocusText = '#95959C',
  additional = '#545456',
  toggleOff = '#39383D',
  toggleOn = '#2FD159';

import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  background: {
    backgroundColor: darkContrast,
    flex: 1,
  },
  container: {
    backgroundColor: darkContrast,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    color: darkContrast,
    height: 40,
    width: 300,
    paddingLeft: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: lightContrast,
    height: 40,
    width: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: lightContrast,
    color: 'white',
    textAlign: 'left',
    fontSize: 20,
    padding: 10,
    paddingLeft: 50,
    width: 300,
  },
});
