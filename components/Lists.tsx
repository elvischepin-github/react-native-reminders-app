import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, TextInput} from 'react-native';

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
  const [input, setInput] = useState('');

  const [reminders, setReminders] = useState<remindersType[]>([
    {id: 0, task: 'Coding exercise!'},
    {id: 1, task: 'Something!'},
    {id: 2, task: 'Nothing!'},
  ]);

  class Reminder {
    id: number;
    task: string;
    isSheduled: boolean;
    scheduledDate: Date;

    constructor(task: string) {
      this.id = Date.now();
      this.task = task;
      this.isSheduled = false;
      this.scheduledDate = new Date();
    }
  }

  const whiteFiledInputChange = (typedText: string) => {
    setInput(typedText);
  };

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
      <View style={style.centering}>
        <TextInput
          keyboardType="default"
          placeholder="Let's Go!"
          style={style.input}
          value={input}
          onChangeText={whiteFiledInputChange}
        />
        <TouchableOpacity
          onPress={addItem}
          style={[style.inputAddButton, style.centering]}>
          <FontAwesomeIcon color={toggleOn} size={24} icon={faPlus} />
        </TouchableOpacity>
      </View>
      <View style={style.container}>
        <FlatList
          data={reminders}
          renderItem={({item}) => (
            <>
              <ListElement task={item.task} id={item.id} />
            </>
          )}
        />
      </View>
    </>
  );
}
