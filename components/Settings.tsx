import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import {
  darkContrast,
  lightContrast,
  nonFocusText,
  additional,
  toggleOff,
  toggleOn,
  style,
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
