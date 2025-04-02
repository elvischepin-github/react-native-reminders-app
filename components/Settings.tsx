import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import {
  darkContrast,
  lightContrast,
  nonFocusText,
  additional,
  toggleOff,
  toggleOn,
} from '../styles.js';

export default function Settings() {
  return (
    <View style={style.background}>
      <View style={style.container}>
        <TouchableOpacity>
          <Text style={style.text}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.text}>Change Theme</Text>
        </TouchableOpacity>
      </View>

      <View style={style.container}>
        <TouchableOpacity>
          <Text style={style.text}>Import Data</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.text}>Export Data</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.text}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  background: {
    backgroundColor: darkContrast,
    flex: 1,
  },
  container: {
    backgroundColor: darkContrast,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  text: {
    backgroundColor: lightContrast,
    color: 'white',
    textAlign: 'left',
    fontSize: 20,
    padding: 10,
    paddingLeft: 50,
  },
});
