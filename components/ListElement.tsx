import {useState} from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendar,
  faClock,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import {style} from '../styles';

interface ListElementProps {
  id: number;
  task: string;
  isScheduled: boolean;
  scheduledDate: Date;
  setScheduledTime: (id: number, bool: boolean, date: Date) => void;
}

export default function ListElement({
  task,
  id,
  isScheduled,
  scheduledDate,
  setScheduledTime,
}: ListElementProps) {
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

  const onWidgetChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const widgetVisibilityState = (currentMode: 'date' | 'time' | 'datetime') => {
    setShow(true);
    setMode(currentMode);
  };

  const showDateWidgetPicker = () => {
    widgetVisibilityState('date');
    setDoneButtonVisibility(true);
  };

  const showTimeWidgetPicker = () => {
    widgetVisibilityState('time');
    setDoneButtonVisibility(true);
  };

  const confirmDateAndTimeButton = () => {
    setShow(false);
    setDoneButtonVisibility(false);
    setScheduledTime(id, true, date);
    // printTime();
  };

  return (
    <TouchableOpacity
      onPress={Reminder =>
        console.log({id, task, isScheduled}, scheduledDate.getDate())
      }>
      <Text key={id} style={style.textReminderMain}>
        {task}
      </Text>

      <Text style={style.textReminderNote}>Tomorrow, 07:00 🔁 Daily</Text>

      <TouchableOpacity style={style.setDateAndTimeContainer}>
        <Text
          style={[style.setDateAndTimeButtons, style.centering]}
          onPress={showDateWidgetPicker}>
          <FontAwesomeIcon icon={faCalendar} />
          Add Date
        </Text>
        <Text
          style={[style.setDateAndTimeButtons, style.centering]}
          onPress={showTimeWidgetPicker}>
          <FontAwesomeIcon icon={faClock} />
          Add Time
        </Text>
        {doneButtonVisibility ? (
          <Text
            style={[style.setDateAndTimeButtons, style.centering]}
            onPress={confirmDateAndTimeButton}>
            <FontAwesomeIcon icon={faCircleCheck} />
            Done
          </Text>
        ) : null}
      </TouchableOpacity>
      {show && (
        <View style={style.centering}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onWidgetChange}
            display="spinner"
            textColor="#FFFFFF"
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

// https://www.npmjs.com/package/react-swipeable-list
