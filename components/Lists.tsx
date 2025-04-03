import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCirclePlus, faMinus} from '@fortawesome/free-solid-svg-icons';

import {
  darkContrast,
  lightContrast,
  nonFocusText,
  additional,
  toggleOff,
  toggleOn,
  style,
} from '../styles.js';

interface remindersType {
  id: number;
  task: string;
}

export default function Lists() {
  const [reminders, setReminders] = useState<remindersType[]>([
    {id: 0, task: 'Coding exercise!'},
  ]);

  const [input, setInput] = useState('');

  const onChange = (typedText: string) => {
    setInput(typedText);
  };

  class Reminder {
    id: number;
    task: string;
    constructor(task: string) {
      this.task = task;
      this.id = Date.now();
    }
  }

  const addItem = () => {
    if (!input) {
      return;
    } else {
      const newReminder = new Reminder(input);
      setReminders([...reminders, {id: newReminder.id, task: input}]);
      setInput('');
    }
  };

  const deleteItem = (id: number) => {
    setReminders(reminders.filter(element => element.id !== id));
  };

  return (
    <View style={style.background}>
      <View style={style.container}>
        <View style={style.inputContainer}>
          <TextInput
            keyboardType="default"
            placeholder="New activity"
            style={style.input}
            value={input}
            onChangeText={onChange}
          />
          <TouchableOpacity onPress={addItem} style={style.button}>
            <FontAwesomeIcon color={toggleOn} icon={faCirclePlus} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={reminders}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={style.text}>{item.task}</Text>

              <TouchableOpacity
                onPress={() => deleteItem(item.id)}
                style={style.button}>
                <FontAwesomeIcon icon={faMinus} color="firebrick" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
