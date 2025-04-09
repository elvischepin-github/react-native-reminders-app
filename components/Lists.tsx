import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, TextInput} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import ListElement from './ListElement';

import {style} from '../styles.js';

interface ListElementProps {
  id: number;
  task: string;
  isScheduled: boolean;
  scheduledDate: Date;
}

export default function Lists() {
  const [reminders, setReminders] = useState<ListElementProps[]>([
    {
      id: 0,
      task: 'Coding exercise!',
      isScheduled: false,
      scheduledDate: new Date(),
    },
    {id: 1, task: 'Something!', isScheduled: false, scheduledDate: new Date()},
    {id: 2, task: 'Nothing!', isScheduled: false, scheduledDate: new Date()},
  ]);

  function setScheduledTime(id: number, bool: boolean, newDate: Date): void {
    setReminders(
      reminders.map(reminder =>
        reminder.id == id
          ? {...reminder, isScheduled: bool, scheduledDate: newDate}
          : reminder,
      ),
    );
  }

  const [input, setInput] = useState('');
  const whiteFiledInputChange = (typedText: string) => {
    setInput(typedText);
  };

  const createNewReminder = () => {
    if (!input) {
      return;
    } else {
      const newReminder = new Reminder(input);
      setReminders([
        ...reminders,
        {
          id: newReminder.id,
          task: input,
          isScheduled: false,
          scheduledDate: new Date(),
        },
      ]);
      setInput('');
      console.log(newReminder);
    }
  };

  class Reminder {
    id: number;
    task: string;
    isScheduled: boolean;
    scheduledDate: Date;

    constructor(task: string) {
      this.id = Date.now();
      this.task = task;
      this.isScheduled = false;
      this.scheduledDate = new Date();
    }
  }

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
          onPress={createNewReminder}
          style={[style.inputAddButton, style.centering]}>
          <FontAwesomeIcon color="#2FD159" size={24} icon={faPlus} />
        </TouchableOpacity>
      </View>
      <View style={style.container}>
        <FlatList
          data={reminders}
          renderItem={({item}) => (
            <>
              <ListElement
                task={item.task}
                id={item.id}
                isScheduled={item.isScheduled}
                scheduledDate={item.scheduledDate}
                setScheduledTime={setScheduledTime}
              />
            </>
          )}
        />
      </View>
    </>
  );
}

// const deleteItem = (id: number) => {
//   setReminders(reminders.filter(element => element.id !== id));
//   console.log(id);
// };
