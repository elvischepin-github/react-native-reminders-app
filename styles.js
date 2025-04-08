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
  },

  // Lists
  inputAndAddButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
  },
  inputAddButton: {
    width: '100%',
    height: 40,
    backgroundColor: lightContrast,
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'content-box',
    borderBottomWidth: 4,
  },

  textReminderMain: {
    backgroundColor: lightContrast,
    color: 'white',
    fontSize: 20,
  },
  textReminderNote: {
    backgroundColor: lightContrast,
    color: 'white',
    fontSize: 14,
  },
  setDateAndTimeContainer: {
    width: '100%',
    backgroundColor: lightContrast,
    flexDirection: 'row',
    gap: 15,
  },
  setDateAndTimeButtons: {
    backgroundColor: lightContrast,
    color: 'white',
    fontSize: 16,
  },

  // Settings
  textInSettings: {
    backgroundColor: lightContrast,
    color: 'white',
    textAlign: 'left',
    fontSize: 20,
    padding: 10,
    paddingLeft: 50,
  },
});
