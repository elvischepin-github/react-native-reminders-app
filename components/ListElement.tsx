import {useState} from 'react';
import {
  Button,
  Platform,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {lightContrast, style} from '../styles';

interface ListElementProps {
  id: number;
  task: string;
}

export default function ListElement({task, id}: ListElementProps) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'time' | 'datetime'>('date');
  const [show, setShow] = useState(false);
  const [doneButtonVisibility, setDoneButtonVisibility] = useState(false);

  function printTime() {
    console.log(
      date.getDate(),
      '-',
      date.getMonth() + 1,
      '-',
      date.getFullYear(),
      ' ',
      date.getHours(),
      ':',
      date.getMinutes(),
    );
  }

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: 'date' | 'time' | 'datetime') => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setDoneButtonVisibility(true);
  };

  const showTimepicker = () => {
    showMode('time');
    setDoneButtonVisibility(true);
  };

  const pushDoneDateAndTime = () => {
    setShow(false);
    setDoneButtonVisibility(false);
    printTime();
  };

  return (
    <TouchableOpacity>
      <Text key={id} style={style.textReminderMain}>
        {task}
      </Text>

      <Text style={style.textReminderNote}>Tomorrow, 07:00 🔁 Daily</Text>

      <TouchableOpacity style={style.setDateAndTimeContainer}>
        <Text style={style.setDateAndTimeButtons} onPress={showDatepicker}>
          🗓️ Add Date
        </Text>
        <Text style={style.setDateAndTimeButtons} onPress={showTimepicker}>
          🕘 Add Time
        </Text>
        {doneButtonVisibility ? (
          <Text
            style={style.setDateAndTimeButtons}
            onPress={pushDoneDateAndTime}>
            Done
          </Text>
        ) : null}
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
          display="spinner"
          textColor="#FFFFFF"
        />
      )}
    </TouchableOpacity>
  );
}

// https://www.npmjs.com/package/react-swipeable-list
