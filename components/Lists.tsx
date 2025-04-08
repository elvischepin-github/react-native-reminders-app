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
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import ListElement from './ListElement';

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

interface ListElementProps {
  id: number;
  task: string;
}

export default function Lists() {
  const [reminders, setReminders] = useState<remindersType[]>([
    {id: 0, task: 'Coding exercise!'},
    {id: 1, task: 'Something!'},
    {id: 2, task: 'Nothing!'},
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
    setReminder() {}
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

  // const deleteItem = (id: number) => {
  //   setReminders(reminders.filter(element => element.id !== id));
  //   console.log(id);
  // };

  return (
    <>
      <View style={style.inputAndAddButtonContainer}>
        <TextInput
          keyboardType="default"
          placeholder="Let's Go!"
          style={style.input}
          value={input}
          onChangeText={onChange}
        />
        <TouchableOpacity onPress={addItem} style={style.inputAddButton}>
          <FontAwesomeIcon color={toggleOn} size={24} icon={faPlus} />
        </TouchableOpacity>
      </View>
      <View style={style.container}>
        <FlatList
          data={reminders}
          renderItem={({item}) => (
            <>
              <ListElement task={item.task} id={item.id} />
              {/* <TouchableOpacity
              onPress={() => deleteItem(item.id)}
              style={style.button}>
              <FontAwesomeIcon icon={faMinus} color="firebrick" />
            </TouchableOpacity> */}
            </>
          )}
        />
      </View>
    </>
  );
}
